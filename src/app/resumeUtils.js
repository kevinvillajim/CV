function getProfileAge(profile) {
	const birthDate = profile?.birthDate;

	if (!birthDate) {
		return profile?.age ?? "";
	}

	const date = new Date(`${birthDate}T00:00:00`);

	if (Number.isNaN(date.getTime())) {
		return profile?.age ?? "";
	}

	const now = new Date();
	let age = now.getFullYear() - date.getFullYear();
	const monthDiff = now.getMonth() - date.getMonth();

	if (
		monthDiff < 0 ||
		(monthDiff === 0 && now.getDate() < date.getDate())
	) {
		age -= 1;
	}

	return age >= 0 ? String(age) : "";
}

function resolveProfileText(text, profile) {
	if (typeof text !== "string") {
		return text;
	}

	const age = getProfileAge(profile);

	return text
		.replace(/\{\{\s*age\s*\}\}/gi, age)
		.replace(/\{\{\s*edad\s*\}\}/gi, age);
}

function createEmptyTimelineEntry() {
	return {
		badgeIconKey: "",
		company: "",
		content: "",
		job: "",
		time: "",
	};
}

function createEmptyNote() {
	return {
		label: "",
		value: "",
	};
}

export {
	createEmptyNote,
	createEmptyTimelineEntry,
	getProfileAge,
	resolveProfileText,
};
