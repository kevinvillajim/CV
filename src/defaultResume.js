import translationES from "./languages/translationES";
import translationEN from "./languages/translationEN";
import translationPR from "./languages/translationPR";

function makeExperienceSet(translation) {
	return [
		{
			job: translation.firstJob,
			company: translation.firstCompany,
			time: translation.firstTime,
			content: translation.firstContent,
		},
		{
			job: translation.secondJob,
			company: translation.secondCompany,
			time: translation.secondTime,
			content: translation.secondContent,
		},
		{
			job: translation.thirdJob,
			company: translation.thirdCompany,
			time: translation.thirdTime,
			content: translation.thirdContent,
		},
		{
			job: translation.fourthJob,
			company: translation.fourthCompany,
			time: translation.fourthTime,
			content: translation.fourthContent,
		},
		{
			job: translation.fifthJob,
			company: translation.fifthCompany,
			time: translation.fifthTime,
			content: translation.fifthContent,
		},
	];
}

function makeEducationSet(translation) {
	return [
		{
			job: translation.fifthStudy,
			company: translation.fifthInstitution,
			time: translation.fifthSTime,
			content: "",
		},
		{
			job: translation.firstStudy,
			company: translation.firstInstitution,
			time: translation.firstSTime,
			content: "",
		},
		{
			job: translation.secondStudy,
			company: translation.secondInstitution,
			time: translation.secondSTime,
			content: "",
			badgeIconKey: "cisco",
		},
		{
			job: translation.thirdStudy,
			company: translation.thirdInstitution,
			time: translation.thirdSTime,
			content: "",
		},
		{
			job: translation.fourthStudy,
			company: translation.fourthInstitution,
			time: translation.fourthSTime,
			content: "",
		},
	];
}

const defaultResume = {
	profile: {
		name: "Kevin Villacreses",
		age: "30",
		birthDate: "1996-02-06",
		email: "kevinvillajim@hotmail.com",
		phone: "+34 623 625 101",
		address: "Los Ramos, Murcia, España",
		location: "Murcia, España",
		study: "BYU Idaho",
		field: "Web, UI & branding",
		portfolioUrl: "http://portfolio.esparta-ec.com/",
		githubUrl: "https://github.com/kevinvillajim",
	},
	skills: [
		{
			key: "frontend",
			items: [
				{label: "HTML", iconKey: "html"},
				{label: "CSS", iconKey: "css"},
				{label: "JavaScript", iconKey: "javascript"},
				{label: "TypeScript", iconKey: "ts"},
				{label: "React", iconKey: "react"},
				{label: "ReactNative", iconKey: "reactnative"},
				{label: "Tailwind", iconKey: "tailwind"},
				{label: "Bootstrap", iconKey: "bootstrap"},
				{label: "WordPress", iconKey: "wordpress"},
			],
		},
		{
			key: "backend",
			items: [
				{label: "Laravel", iconKey: "laravel"},
				{label: "PHP", iconKey: "php"},
				{label: "C#", iconKey: "csharp"},
				{label: "NodeJS", iconKey: "nodejs"},
				{label: "Express", iconKey: "express"},
				{label: "Python", iconKey: "python"},
				{label: "MySQL", iconKey: "mysql"},
				{label: "PostgreSQL", iconKey: "postgresql"},
				{label: "MongoDB", iconKey: "mongodb"},
			],
		},
		{
			key: "design",
			items: [
				{label: "Figma", iconKey: "figma"},
				{label: "Photoshop", iconKey: "photoshop"},
				{label: "Illustrator", iconKey: "illustrator"},
				{label: "Premiere Pro", iconKey: "premiere"},
				{label: "SketchUp", iconKey: "sketchup"},
				{label: "ArchiCAD", iconKey: "archicad"},
				{label: "AutoCAD", iconKey: "autocad"},
			],
		},
		{
			key: "other",
			items: [
				{label: "ClaudeCode", iconKey: "claudecode"},
				{label: "Codex", iconKey: "codex"},
				{label: "GitHub", iconKey: "github"},
				{label: "Docker", iconKey: "docker"},
				{label: "PolyBoard", iconKey: "polyboard"},
				{label: "FL Studio", iconKey: "flstudio"},
			],
		},
	],
	locales: {
		ES: {
			role: translationES.titleDescription,
			about: translationES.me,
			profileNotes: [
				{
					label: "Mezcla",
					value: "Branding, UI/UX, sitios web y desarrollo de aplicaciones.",
				},
				{
					label: "Actualidad",
					value: "Estudiante de Systems and IT en BYU Idaho.",
				},
				{
					label: "Modo de trabajo",
					value: "Diseño con intención y desarrollo orientado a resultado.",
				},
			],
			experiences: makeExperienceSet(translationES),
			education: makeEducationSet(translationES),
		},
		EN: {
			role: translationEN.titleDescription,
			about: translationEN.me,
			profileNotes: [
				{
					label: "Blend",
					value: "Branding, UI/UX, websites and app development.",
				},
				{
					label: "Current",
					value: "Systems and IT student at BYU Idaho.",
				},
				{
					label: "Working mode",
					value: "Design with intention and development focused on outcomes.",
				},
			],
			experiences: makeExperienceSet(translationEN),
			education: makeEducationSet(translationEN),
		},
		PR: {
			role: translationPR.titleDescription,
			about: translationPR.me,
			profileNotes: [
				{
					label: "Mistura",
					value: "Branding, UI/UX, sites e desenvolvimento de aplicações.",
				},
				{
					label: "Atual",
					value: "Estudante de Systems and IT na BYU Idaho.",
				},
				{
					label: "Modo de trabalho",
					value: "Design com intenção e desenvolvimento orientado a resultado.",
				},
			],
			experiences: makeExperienceSet(translationPR),
			education: makeEducationSet(translationPR),
		},
	},
};

export default defaultResume;
