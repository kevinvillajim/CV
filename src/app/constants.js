import defaultResume from "../defaultResume";
import {availableIconKeys} from "../iconCatalog";

const ROUTES = {
	admin: "/admin",
	home: "/",
	login: "/login",
};

const adminCopy = {
	addEducationHint: "Crea otra formación y la deja lista en el idioma actual.",
	addEducation: "Añadir estudio",
	addExperienceHint: "Crea otra experiencia y la sincroniza si estás editando en español.",
	addExperience: "Añadir experiencia",
	addSkillGroup: "Añadir bloque",
	addNote: "Añadir nota",
	addSkill: "Añadir skill",
	adminHint:
		"Editas a la izquierda y ves el resultado real a la derecha, sin contaminar la vista pública.",
	adminTitle: "Editor visual del CV",
	credentialsHint: "Acceso demo: admin@admin.com / admin123456",
	dashboardLead:
		"Organiza el contenido del CV con vista previa en vivo y edición manual por idioma.",
	autoAgeCaption: "La edad se calcula sola a partir de la fecha de nacimiento.",
	birthDate: "Fecha de nacimiento",
	dataTitle: "Datos base",
	educationTitle: "Educación por idioma",
	editorPanels: {
		education: "Formación",
		experience: "Experiencia",
		locale: "Idioma",
		profile: "Perfil base",
		skills: "Skills",
	},
	experienceTitle: "Experiencia por idioma",
	iconHint: `Claves disponibles: ${availableIconKeys.join(", ")}`,
	loginButton: "Entrar",
	loginLead:
		"Inicia sesión con el usuario admin para editar el contenido del CV sin mostrar controles en la vista pública.",
	loginTitle: "Acceso admin",
	logout: "Cerrar sesión",
	notesTitle: "Notas rápidas",
	previewTitle: "Vista previa en vivo",
	placeholderBadge: "badgeIconKey opcional",
	placeholderContent: "Contenido o puntos separados por guiones",
	placeholderField: "Campo",
	placeholderIcon: "iconKey o URL",
	placeholderLabel: "Etiqueta",
	placeholderSkillDescription: "Descripción corta del bloque",
	placeholderSkillGroup: "Nombre del bloque",
	remove: "Eliminar",
	reorderDown: "Bajar",
	reorderUp: "Subir",
	save: "Guardar cambios",
	saveError: "No se pudieron guardar los cambios.",
	saveReady: "Los cambios aún no se han guardado.",
	saveSuccess: "Cambios guardados correctamente.",
	saving: "Guardando...",
	sharedTitle: "Contenido por idioma",
	skillsTitle: "Skills",
	viewCv: "Ver CV",
};

const uiCopy = {
	ES: {
		detailsTitle: "Datos y enlaces",
		focusLead:
			"Un perfil híbrido entre diseño gráfico, interfaces y desarrollo full stack, con atención real al acabado visual.",
		focusPoints: [
			"Interfaces limpias, expresivas y pensadas para navegarse fácil.",
			"Experiencia combinando WordPress, React, Laravel y contenido visual.",
			"Criterio gráfico aplicado a branding, UI, producto y piezas comerciales.",
		],
		focusTitle: "Enfoque",
		heroFactBase: "Base",
		heroFactField: "Campo",
		heroLabel: "CV / Portafolio",
		heroRoleStamp: "Developer / Designer",
		heroStudy: "Formación",
		navEducation: "Formación",
		navExperience: "Experiencia",
		navProfile: "Perfil",
		navSkills: "Stack",
		navTitle: "Mapa",
		profileLabel: "Lectura rápida",
		profileLead: "Perfil profesional y experiencia.",
		skillGroups: {
			backend: {
				description:
					"Herramientas para construir lógica, contenido, persistencia y APIs.",
				title: "Back-end & datos",
			},
			design: {
				description:
					"Software con el que conviertes una idea en identidad, interfaz y material real.",
				title: "Diseño visual",
			},
			frontend: {
				description:
					"Interfaces visuales, responsive y con mejor criterio de jerarquía.",
				title: "Front-end & producto",
			},
			other: {
				description:
					"Herramientas complementarias, flujos de trabajo y software especializado.",
				title: "Otras herramientas",
			},
		},
		skillsNote:
			"Stack seleccionado para mostrar amplitud, pero también criterio en lo que mejor manejas.",
	},
	EN: {
		detailsTitle: "Details & links",
		focusLead:
			"A hybrid profile across graphic design, interface work and full stack development, with real attention to visual finish.",
		focusPoints: [
			"Clean, expressive interfaces that stay easy to navigate.",
			"Experience combining WordPress, React, Laravel and visual content.",
			"Graphic judgement applied to branding, UI, product and marketing pieces.",
		],
		focusTitle: "Focus",
		heroFactBase: "Base",
		heroFactField: "Field",
		heroLabel: "CV / Portfolio",
		heroRoleStamp: "Developer / Designer",
		heroStudy: "Currently",
		navEducation: "Education",
		navExperience: "Experience",
		navProfile: "Profile",
		navSkills: "Stack",
		navTitle: "Map",
		profileLabel: "Quick read",
		profileLead: "Professional profile and experience.",
		skillGroups: {
			backend: {
				description: "Tools for logic, persistence, APIs and content systems.",
				title: "Back-end & data",
			},
			design: {
				description:
					"Software used to turn an idea into identity, interfaces and production-ready assets.",
				title: "Visual design",
			},
			frontend: {
				description:
					"Visual, responsive interfaces with stronger hierarchy and clarity.",
				title: "Front-end & product",
			},
			other: {
				description:
					"Supporting tools, workflows, and specialized software used across projects.",
				title: "Other tools",
			},
		},
		skillsNote:
			"A selected stack to show breadth, but also the tools you handle best.",
	},
	PR: {
		detailsTitle: "Dados e links",
		focusLead:
			"Um perfil híbrido entre design gráfico, interfaces e desenvolvimento full stack, com atenção real ao acabamento visual.",
		focusPoints: [
			"Interfaces limpas, expressivas e fáceis de navegar.",
			"Experiência combinando WordPress, React, Laravel e conteúdo visual.",
			"Critério gráfico aplicado a branding, UI, produto e peças comerciais.",
		],
		focusTitle: "Foco",
		heroFactBase: "Base",
		heroFactField: "Campo",
		heroLabel: "CV / Portfólio",
		heroRoleStamp: "Developer / Designer",
		heroStudy: "Atualmente",
		navEducation: "Formação",
		navExperience: "Experiência",
		navProfile: "Perfil",
		navSkills: "Stack",
		navTitle: "Mapa",
		profileLabel: "Leitura rápida",
		profileLead: "Perfil profissional e experiência.",
		skillGroups: {
			backend: {
				description:
					"Ferramentas para construir lógica, persistência, APIs e sistemas de conteúdo.",
				title: "Back-end & dados",
			},
			design: {
				description:
					"Software usado para transformar uma ideia em identidade, interface e peças reais.",
				title: "Design visual",
			},
			frontend: {
				description:
					"Interfaces visuais, responsivas e com melhor critério de hierarquia.",
				title: "Front-end & produto",
			},
			other: {
				description:
					"Ferramentas complementares, fluxos de trabalho e software especializado.",
				title: "Outras ferramentas",
			},
		},
		skillsNote:
			"Um stack selecionado para mostrar amplitude, mas também o que você domina melhor.",
	},
};

function cloneResume(value) {
	return JSON.parse(JSON.stringify(value));
}

function getCurrentRoute() {
	const path = window.location.pathname || ROUTES.home;

	if (path === ROUTES.login || path === ROUTES.admin) {
		return path;
	}

	return ROUTES.home;
}

function goTo(path, replace = false) {
	const method = replace ? "replaceState" : "pushState";
	window.history[method]({}, "", path);
}

function getLocaleBlock(resume, language) {
	return resume.locales?.[language] ?? resume.locales?.ES ?? defaultResume.locales.ES;
}

function getSkillGroups(skills, microcopy, resolveIcon) {
	return (skills ?? []).map((group) => {
		const copy = microcopy.skillGroups[group.key] ?? {
			description: microcopy.skillsNote,
			title: group.key,
		};

		return {
			description: group.description ?? copy.description,
			items: (group.items ?? []).map((item) => ({
				...item,
				icon: resolveIcon(item.iconKey),
			})),
			title: group.title ?? copy.title,
		};
	});
}

export {
	adminCopy,
	cloneResume,
	getCurrentRoute,
	getLocaleBlock,
	getSkillGroups,
	goTo,
	ROUTES,
	uiCopy,
};
