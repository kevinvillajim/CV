import ciscoIcon from "../images/icons/CISCO.png";
import htmlIcon from "../images/icons/HTML5.png";
import cssIcon from "../images/icons/CSS.png";
import jsIcon from "../images/icons/JS.png";
import tsIcon from "../images/icons/TS.png";
import reactIcon from "../images/icons/REACT.png";
import reactNativeIcon from "../images/icons/RN.svg";
import tailwindIcon from "../images/icons/TW.svg";
import bootstrapIcon from "../images/icons/BS.png";
import nodeIcon from "../images/icons/NODE.png";
import phpIcon from "../images/icons/PHP.png";
import csharpIcon from "../images/icons/CS.svg";
import expressIcon from "../images/icons/EXP.png";
import laravelIcon from "../images/icons/LV.png";
import pythonIcon from "../images/icons/PY.png";
import mysqlIcon from "../images/icons/MYSQL.png";
import postgresIcon from "../images/icons/PSQL.png";
import mongoIcon from "../images/icons/MDB.png";
import wordpressIcon from "../images/icons/WP.png";
import figmaIcon from "../images/icons/FIGMA.png";
import photoshopIcon from "../images/icons/PS.png";
import illustratorIcon from "../images/icons/ILL.png";
import premiereIcon from "../images/icons/PP.png";
import sketchupIcon from "../images/icons/SKU.png";
import archicadIcon from "../images/icons/AC.png";
import autocadIcon from "../images/icons/ACAD.webp";
import claudeCodeIcon from "../images/icons/CLAUDEC.svg";
import codexIcon from "../images/icons/CODEX.png";
import gitIcon from "../images/icons/GIT.png";
import githubIcon from "../images/icons/GH.png";
import dockerIcon from "../images/icons/DOCKER.png";
import polyboardIcon from "../images/icons/PB.png";
import flStudioIcon from "../images/icons/FL.png";


const iconCatalog = {
	archicad: archicadIcon,
	autocad: autocadIcon,
	bootstrap: bootstrapIcon,
	cisco: ciscoIcon,
	claudecode: claudeCodeIcon,
	codex: codexIcon,
	csharp: csharpIcon,
	css: cssIcon,
	docker: dockerIcon,
	express: expressIcon,
	figma: figmaIcon,
	flstudio: flStudioIcon,
	git: gitIcon,
	github: githubIcon,
	html: htmlIcon,
	illustrator: illustratorIcon,
	javascript: jsIcon,
	laravel: laravelIcon,
	mongodb: mongoIcon,
	mysql: mysqlIcon,
	nodejs: nodeIcon,
	photoshop: photoshopIcon,
	php: phpIcon,
	postgresql: postgresIcon,
	premiere: premiereIcon,
	polyboard: polyboardIcon,
	python: pythonIcon,
	react: reactIcon,
	reactnative: reactNativeIcon,
	sketchup: sketchupIcon,
	tailwind: tailwindIcon,
	ts: tsIcon,
	wordpress: wordpressIcon,
};

function resolveIcon(iconKeyOrUrl) {
	if (!iconKeyOrUrl) {
		return "";
	}

	if (iconCatalog[iconKeyOrUrl]) {
		return iconCatalog[iconKeyOrUrl];
	}

	if (/^(https?:|data:|\/)/.test(iconKeyOrUrl) || /\.[a-z0-9]+$/i.test(iconKeyOrUrl)) {
		return iconKeyOrUrl;
	}

	return "";
}

const availableIconKeys = Object.keys(iconCatalog);

export {availableIconKeys, iconCatalog, resolveIcon};
