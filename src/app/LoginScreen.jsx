/* eslint-disable react/prop-types */

import {adminCopy} from "./constants";

function LoginScreen({
	isSubmitting,
	loginError,
	loginForm,
	onChange,
	onSubmit,
}) {
	return (
		<div className="auth-shell">
			<div className="paper-noise" aria-hidden="true" />
			<section className="auth-card">
				<span className="hero-label">{adminCopy.loginTitle}</span>
				<h1>{adminCopy.loginTitle}</h1>
				<p>{adminCopy.loginLead}</p>
				<form className="auth-form" onSubmit={onSubmit}>
					<label className="admin-field">
						<span>Email</span>
						<input
							type="email"
							value={loginForm.email}
							onChange={(event) => onChange("email", event.target.value)}
							placeholder="admin@admin.com"
							autoComplete="username"
						/>
					</label>
					<label className="admin-field">
						<span>Contraseña</span>
						<input
							type="password"
							value={loginForm.password}
							onChange={(event) => onChange("password", event.target.value)}
							placeholder="admin123456"
							autoComplete="current-password"
						/>
					</label>
					<button type="submit" className="action-pill action-pill-primary auth-submit">
						<span>{isSubmitting ? "Validando..." : adminCopy.loginButton}</span>
					</button>
				</form>
				<p className="auth-hint">{adminCopy.credentialsHint}</p>
				{loginError ? <p className="auth-error">{loginError}</p> : null}
			</section>
		</div>
	);
}

export default LoginScreen;
