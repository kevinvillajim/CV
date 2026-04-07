/* eslint-disable react/prop-types */

import {ExpCards, InfoPrint, SkillsImg} from "../functions";
import translationES from "../languages/translationES";
import translationEN from "../languages/translationEN";
import translationPR from "../languages/translationPR";
import {PUBLIC_BASE_URL} from "../api";
import {getLocaleBlock, getSkillGroups, uiCopy} from "./constants";
import {resolveIcon} from "../iconCatalog";
import {getProfileAge, resolveProfileText} from "./resumeUtils";
import profilePhoto from "../../images/fotoCvi.png";
import portfolioIcon from "../../images/icons/PF.svg";
import githubIcon from "../../images/icons/GH.svg";
import flagES from "../../images/icons/ES.png";
import flagEN from "../../images/icons/EN.png";
import flagPR from "../../images/icons/PR.png";

function PublicResume({isEmbedded = false, language, notice, resume, setLanguage}) {
	const translations =
		language === "ES"
			? translationES
			: language === "EN"
			? translationEN
			: translationPR;
	const microcopy = uiCopy[language];
	const locale = getLocaleBlock(resume, language);
	const languageIcon =
		language === "ES" ? flagES : language === "EN" ? flagEN : flagPR;
	const [firstName, ...restName] = resume.profile.name.split(" ");
	const heroFacts = [
		{label: microcopy.heroFactBase, value: resume.profile.location},
		{label: microcopy.heroStudy, value: resume.profile.study},
		{label: microcopy.heroFactField, value: resume.profile.field},
	];
	const profileDetails = [
		{proper: translations.titleAge, answer: getProfileAge(resume.profile)},
		{proper: "Email", answer: resume.profile.email},
		{proper: translations.titleTelephone, answer: resume.profile.phone},
		{proper: translations.titleAddress, answer: resume.profile.address},
	];
	const skillGroups = getSkillGroups(resume.skills, microcopy, resolveIcon);
	const resolvedProfileLead = resolveProfileText(microcopy.profileLead, resume.profile);
	const resolvedAbout = resolveProfileText(locale.about, resume.profile);
	const pdfUrl = `${PUBLIC_BASE_URL}/resume/pdf?lang=${language}&download=1`;

	return (
		<div className={`cv-shell ${isEmbedded ? "cv-shell-embedded" : ""}`}>
			{isEmbedded ? null : <div className="paper-noise" aria-hidden="true" />}
			<main className="cv-stage">
				{notice ? <div className="notice-strip">{notice}</div> : null}

				<section className="hero-stage">
					<div className="hero-copy">
						<span className="hero-label">{microcopy.heroLabel}</span>
						<h1 className="hero-title">
							{firstName}
							<br />
							{restName.join(" ")}
						</h1>
						<p className="hero-role">{locale.role}</p>
						<p className="hero-summary">{resolvedAbout}</p>
						<div className="hero-actions">
							<a
								href={resume.profile.portfolioUrl}
								target="_blank"
								rel="noreferrer"
								className="action-pill action-pill-primary"
							>
								<img src={portfolioIcon} alt="Portfolio" />
								<span>Portfolio</span>
							</a>
							<a
								href={resume.profile.githubUrl}
								target="_blank"
								rel="noreferrer"
								className="action-pill"
							>
								<img src={githubIcon} alt="GitHub" />
								<span>GitHub</span>
							</a>
							<button
								type="button"
								className="action-pill language-pill"
								onClick={() => {
									setLanguage(
										language === "ES" ? "EN" : language === "EN" ? "PR" : "ES"
									);
								}}
							>
								<img src={languageIcon} alt={language} />
								<span>{language}</span>
							</button>
							<a
								href={pdfUrl}
								target="_blank"
								rel="noreferrer"
								className="action-pill"
							>
								<span>CV PDF</span>
							</a>
						</div>
					</div>

					<div className="hero-visual">
						<div className="portrait-frame">
							<span className="portrait-stamp">{microcopy.heroRoleStamp}</span>
							<img
								src={profilePhoto}
								alt="Kevin Villacreses"
								className="portrait-image"
							/>
						</div>
						<div className="fact-grid">
							{heroFacts.map((fact) => (
								<div className="fact-card" key={fact.label}>
									<span>{fact.label}</span>
									<strong>{fact.value}</strong>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="resume-layout">
					<aside className="side-rail">
						<section className="rail-panel">
							<div className="panel-heading">
								<span className="panel-count">01</span>
								<div>
									<h2>{microcopy.navTitle}</h2>
									<p>{microcopy.skillsNote}</p>
								</div>
							</div>
							<nav className="quick-nav">
								<a href="#profile">
									<span>{microcopy.navProfile}</span>
								</a>
								<a href="#experience">
									<span>{microcopy.navExperience}</span>
								</a>
								<a href="#education">
									<span>{microcopy.navEducation}</span>
								</a>
								<a href="#skills">
									<span>{microcopy.navSkills}</span>
								</a>
							</nav>
						</section>

						<section className="rail-panel">
							<div className="panel-heading">
								<span className="panel-count">02</span>
								<div>
									<h2>{microcopy.detailsTitle}</h2>
									<p>{translations.titleMe}</p>
								</div>
							</div>
							<div className="detail-list">
								{profileDetails.map((detail) => (
									<InfoPrint
										key={detail.proper}
										proper={detail.proper}
										answer={detail.answer}
									/>
								))}
							</div>
						</section>

						<section className="rail-panel rail-panel-dark">
							<div className="panel-heading">
								<span className="panel-count">03</span>
								<div>
									<h2>{microcopy.focusTitle}</h2>
									<p>{locale.role}</p>
								</div>
							</div>
							<p className="focus-lead">{microcopy.focusLead}</p>
							<ul className="focus-list">
								{microcopy.focusPoints.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</section>

						<section className="rail-panel" id="skills">
							<div className="panel-heading">
								<span className="panel-count">04</span>
								<div>
									<h2>{translations.titleProfesionalSkills}</h2>
									<p>{microcopy.skillsNote}</p>
								</div>
							</div>
							<div className="skills-stack">
								{skillGroups.map((group) => (
									<SkillsImg
										key={group.title}
										title={group.title}
										description={group.description}
										items={group.items}
									/>
								))}
							</div>
						</section>
					</aside>

					<div className="content-column">
						<section className="content-panel" id="profile">
							<div className="section-heading">
								<span className="section-count">01</span>
								<div>
									<h2>{translations.titleMe}</h2>
									<p>{resolvedProfileLead}</p>
								</div>
							</div>

							<div className="intro-grid">
								<div className="notes-stack">
									{locale.profileNotes.map((note) => (
										<div className="note-card" key={`${note.label}-${note.value}`}>
											<span>{note.label}</span>
											<strong>{note.value}</strong>
										</div>
									))}
									<div className="project-spotlight">
										<a
											href="https://esparta-ec.com/"
											target="_blank"
											rel="noreferrer"
											className="project-spotlight-main"
										>
											<img
												src="/highlights/esparta-home.png"
												alt="Esparta Agencia Creativa"
												className="project-spotlight-image"
											/>
											<div className="project-spotlight-overlay">
												<span>Proyecto destacado</span>
												<strong>Esparta Agencia Creativa</strong>
											</div>
										</a>
										<a
											href="http://portfolio.esparta-ec.com/"
											target="_blank"
											rel="noreferrer"
											className="project-spotlight-side"
										>
											<img
												src="/highlights/portfolio-home.png"
												alt="Portfolio de Kevin Villacreses"
												className="project-spotlight-side-image"
											/>
											<div className="project-spotlight-side-copy">
												<span>Portfolio personal</span>
												<strong>Kevin Villacreses</strong>
											</div>
										</a>
									</div>
								</div>
							</div>
						</section>

						<section className="content-panel" id="experience">
							<div className="section-heading">
								<span className="section-count">02</span>
								<div>
									<h2>{translations.titleExperience}</h2>
									<p>{microcopy.focusLead}</p>
								</div>
							</div>

							<div className="entries-stack">
								{locale.experiences.map((entry, index) => (
									<ExpCards
										key={`${entry.job}-${entry.company}-${index}`}
										index={`${index + 1}`.padStart(2, "0")}
										job={entry.job}
										company={entry.company}
										time={entry.time}
										content={entry.content}
										tone={index % 3 === 0 ? "ink" : index % 3 === 1 ? "paper" : "accent"}
									/>
								))}
							</div>
						</section>

						<section className="content-panel" id="education">
							<div className="section-heading">
								<span className="section-count">03</span>
								<div>
									<h2>{translations.titleEducation}</h2>
									<p>{microcopy.skillsNote}</p>
								</div>
							</div>

							<div className="entries-stack entries-stack-compact">
								{locale.education.map((entry, index) => (
									<ExpCards
										key={`${entry.job}-${entry.company}-${index}`}
										index={`${index + 1}`.padStart(2, "0")}
										job={entry.job}
										company={entry.company}
										time={entry.time}
										content={entry.content}
										tone="study"
										badgeIcon={resolveIcon(entry.badgeIconKey)}
									/>
								))}
							</div>
						</section>
					</div>
				</section>
			</main>
		</div>
	);
}

export default PublicResume;
