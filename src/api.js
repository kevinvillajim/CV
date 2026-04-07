const API_BASE_URL =
	import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000/api";
const PUBLIC_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, "");

const TOKEN_KEY = "cv_admin_token";

async function apiRequest(path, options = {}) {
	const {method = "GET", body, token} = options;
	const headers = {
		Accept: "application/json",
	};

	if (body !== undefined) {
		headers["Content-Type"] = "application/json";
	}

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const response = await fetch(`${API_BASE_URL}${path}`, {
		method,
		headers,
		body: body !== undefined ? JSON.stringify(body) : undefined,
	});

	let payload = null;

	try {
		payload = await response.json();
	} catch {
		payload = null;
	}

	if (!response.ok) {
		const message = payload?.message ?? "Request failed.";
		throw new Error(message);
	}

	return payload;
}

function loadToken() {
	return window.localStorage.getItem(TOKEN_KEY);
}

function saveToken(token) {
	window.localStorage.setItem(TOKEN_KEY, token);
}

function clearToken() {
	window.localStorage.removeItem(TOKEN_KEY);
}

function fetchResume() {
	return apiRequest("/resume");
}

function login(credentials) {
	return apiRequest("/login", {
		method: "POST",
		body: credentials,
	});
}

function fetchCurrentUser(token) {
	return apiRequest("/me", {token});
}

function fetchAdminResume(token) {
	return apiRequest("/admin/resume", {token});
}

function updateResume(token, content) {
	return apiRequest("/admin/resume", {
		method: "PUT",
		token,
		body: {content},
	});
}

export {
	API_BASE_URL,
	PUBLIC_BASE_URL,
	clearToken,
	fetchAdminResume,
	fetchCurrentUser,
	fetchResume,
	loadToken,
	login,
	saveToken,
	updateResume,
};
