import {useEffect, useState} from "react";
import "./App.css";
import defaultResume from "./defaultResume";
import {
	clearToken,
	fetchAdminResume,
	fetchCurrentUser,
	fetchResume,
	loadToken,
	login,
	saveToken,
	updateResume,
} from "./api";
import {
	adminCopy,
	cloneResume,
	getCurrentRoute,
	goTo,
	ROUTES,
} from "./app/constants";
import AdminDashboard from "./app/AdminDashboard";
import LoginScreen from "./app/LoginScreen";
import PublicResume from "./app/PublicResume";

function App() {
	const [route, setRoute] = useState(() => getCurrentRoute());
	const [language, setLanguage] = useState("ES");
	const [resume, setResume] = useState(defaultResume);
	const [notice, setNotice] = useState("");
	const [token, setToken] = useState(() => loadToken());
	const [authStatus, setAuthStatus] = useState(() => (loadToken() ? "checking" : "guest"));
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});
	const [loginError, setLoginError] = useState("");
	const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
	const [adminResume, setAdminResume] = useState(() => cloneResume(defaultResume));
	const [selectedLocale, setSelectedLocale] = useState("ES");
	const [saveState, setSaveState] = useState({
		message: adminCopy.saveReady,
		status: "idle",
	});

	useEffect(() => {
		const syncRoute = () => setRoute(getCurrentRoute());
		window.addEventListener("popstate", syncRoute);

		return () => {
			window.removeEventListener("popstate", syncRoute);
		};
	}, []);

	useEffect(() => {
		let cancelled = false;

		async function loadPublicResume() {
			try {
				const response = await fetchResume();

				if (cancelled) {
					return;
				}

				setResume(response.data ?? defaultResume);
				setNotice("");
			} catch {
				if (cancelled) {
					return;
				}

				setResume(defaultResume);
				setNotice(
					"Mostrando contenido local de respaldo porque la API del CV no respondió."
				);
			}
		}

		loadPublicResume();

		return () => {
			cancelled = true;
		};
	}, []);

	useEffect(() => {
		if (!token) {
			setAuthStatus("guest");

			if (route === ROUTES.admin) {
				goTo(ROUTES.login, true);
				setRoute(ROUTES.login);
			}

			return;
		}

		let cancelled = false;
		setAuthStatus("checking");

		fetchCurrentUser(token)
			.then(() => {
				if (cancelled) {
					return;
				}

				setAuthStatus("authenticated");
			})
			.catch(() => {
				if (cancelled) {
					return;
				}

				clearToken();
				setToken(null);
				setAuthStatus("guest");

				if (route === ROUTES.admin) {
					goTo(ROUTES.login, true);
					setRoute(ROUTES.login);
				}
			});

		return () => {
			cancelled = true;
		};
	}, [route, token]);

	useEffect(() => {
		if (authStatus !== "authenticated" || !token) {
			return;
		}

		let cancelled = false;

		fetchAdminResume(token)
			.then((response) => {
				if (cancelled) {
					return;
				}

				const nextResume = response.data ?? defaultResume;
				setAdminResume(cloneResume(nextResume));
				setResume(nextResume);
			})
			.catch((error) => {
				if (cancelled) {
					return;
				}

				setSaveState({
					message: error.message,
					status: "error",
				});
			});

		return () => {
			cancelled = true;
		};
	}, [authStatus, token]);

	useEffect(() => {
		if (route === ROUTES.login && authStatus === "authenticated") {
			goTo(ROUTES.admin, true);
			setRoute(ROUTES.admin);
		}
	}, [authStatus, route]);

	const handleLoginChange = (field, value) => {
		setLoginForm((current) => ({
			...current,
			[field]: value,
		}));
	};

	const handleLoginSubmit = async (event) => {
		event.preventDefault();
		setIsSubmittingLogin(true);
		setLoginError("");

		try {
			const response = await login(loginForm);
			saveToken(response.token);
			setToken(response.token);
			setAuthStatus("authenticated");
			goTo(ROUTES.admin, true);
			setRoute(ROUTES.admin);
			setLoginForm({email: "", password: ""});
		} catch (error) {
			setLoginError(error.message);
		} finally {
			setIsSubmittingLogin(false);
		}
	};

	const handleLogout = () => {
		clearToken();
		setToken(null);
		setAdminResume(cloneResume(resume));
		setSaveState({
			message: adminCopy.saveReady,
			status: "idle",
		});
		goTo(ROUTES.home, true);
		setRoute(ROUTES.home);
	};

	const handleSave = async () => {
		if (!token) {
			return;
		}

		setSaveState({
			message: adminCopy.saving,
			status: "saving",
		});

		try {
			const response = await updateResume(token, adminResume);
			const nextResume = response.data ?? adminResume;
			setAdminResume(cloneResume(nextResume));
			setResume(nextResume);
			setSaveState({
				message: adminCopy.saveSuccess,
				status: "saved",
			});
		} catch (error) {
			setSaveState({
				message: error.message || adminCopy.saveError,
				status: "error",
			});
		}
	};

	const handleDirty = () => {
		setSaveState((current) => {
			if (current.status === "saving") {
				return current;
			}

			return {
				message: adminCopy.saveReady,
				status: "idle",
			};
		});
	};

	const handleBackToCv = () => {
		goTo(ROUTES.home);
		setRoute(ROUTES.home);
	};

	if (route === ROUTES.login) {
		return (
			<LoginScreen
				isSubmitting={isSubmittingLogin}
				loginError={loginError}
				loginForm={loginForm}
				onChange={handleLoginChange}
				onSubmit={handleLoginSubmit}
			/>
		);
	}

	if (route === ROUTES.admin) {
		if (authStatus !== "authenticated") {
			return (
				<div className="auth-shell">
					<div className="paper-noise" aria-hidden="true" />
					<section className="auth-card">
						<span className="hero-label">Acceso</span>
						<h1>Verificando acceso</h1>
						<p>Comprobando la sesión antes de mostrar el panel.</p>
					</section>
				</div>
			);
		}

		return (
			<AdminDashboard
				adminResume={adminResume}
				onBackToCv={handleBackToCv}
				onDirty={handleDirty}
				onLogout={handleLogout}
				onSave={handleSave}
				saveState={saveState}
				selectedLocale={selectedLocale}
				setAdminResume={setAdminResume}
				setSelectedLocale={setSelectedLocale}
			/>
		);
	}

	return (
		<PublicResume
			language={language}
			notice={notice}
			resume={resume}
			setLanguage={setLanguage}
		/>
	);
}

export default App;
