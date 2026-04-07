/* eslint-disable react/prop-types */

import {useState} from "react";
import PublicResume from "./PublicResume";
import {adminCopy, cloneResume, getLocaleBlock, uiCopy} from "./constants";
import {createEmptyNote, createEmptyTimelineEntry, getProfileAge} from "./resumeUtils";

function StatusPill({saveState}) {
	const className =
		saveState.status === "saved"
			? "save-status success"
			: saveState.status === "error"
			? "save-status error"
			: saveState.status === "saving"
			? "save-status pending"
			: "save-status";

	return <span className={className}>{saveState.message}</span>;
}

function AdminDashboard({
	adminResume,
	onBackToCv,
	onDirty,
	onLogout,
	onSave,
	saveState,
	selectedLocale,
	setAdminResume,
	setSelectedLocale,
}) {
	const [activePanel, setActivePanel] = useState("profile");
	const locale = getLocaleBlock(adminResume, selectedLocale);
	const adminMicrocopy = uiCopy[selectedLocale];
	const localeOrder = ["ES", "EN", "PR"];
	const panelOptions = [
		["profile", adminCopy.editorPanels.profile],
		["locale", adminCopy.editorPanels.locale],
		["experience", adminCopy.editorPanels.experience],
		["education", adminCopy.editorPanels.education],
		["skills", adminCopy.editorPanels.skills],
	];

	const mutateResume = (updater) => {
		setAdminResume((current) => {
			const next = cloneResume(current);
			updater(next);
			return next;
		});
		onDirty();
	};

	const updateProfileField = (field, value) => {
		mutateResume((draft) => {
			draft.profile[field] = value;
		});
	};

	const updateLocaleField = (field, value) => {
		mutateResume((draft) => {
			draft.locales[selectedLocale][field] = value;
		});
	};

	const updateLocaleNote = (index, field, value) => {
		mutateResume((draft) => {
			draft.locales[selectedLocale].profileNotes[index][field] = value;
		});
	};

	const moveLocaleNote = (index, direction) => {
		mutateResume((draft) => {
			const items = draft.locales[selectedLocale].profileNotes;
			const nextIndex = index + direction;

			if (nextIndex < 0 || nextIndex >= items.length) {
				return;
			}

			[items[index], items[nextIndex]] = [items[nextIndex], items[index]];
		});
	};

	const addLocaleNote = () => {
		mutateResume((draft) => {
			draft.locales[selectedLocale].profileNotes.push(createEmptyNote());
		});
	};

	const removeLocaleNote = (index) => {
		mutateResume((draft) => {
			draft.locales[selectedLocale].profileNotes.splice(index, 1);
		});
	};

	const updateLocaleCollectionItem = (collection, index, field, value) => {
		mutateResume((draft) => {
			draft.locales[selectedLocale][collection][index][field] = value;
		});
	};

	const addLocaleCollectionItem = (collection) => {
		mutateResume((draft) => {
			draft.locales[selectedLocale][collection].push(createEmptyTimelineEntry());
		});
	};

	const removeLocaleCollectionItem = (collection, index) => {
		mutateResume((draft) => {
			draft.locales[selectedLocale][collection].splice(index, 1);
		});
	};

	const moveLocaleCollectionItem = (collection, index, direction) => {
		mutateResume((draft) => {
			const items = draft.locales[selectedLocale][collection];
			const nextIndex = index + direction;

			if (nextIndex < 0 || nextIndex >= items.length) {
				return;
			}

			[items[index], items[nextIndex]] = [items[nextIndex], items[index]];
		});
	};

	const updateSkillGroupField = (groupIndex, field, value) => {
		mutateResume((draft) => {
			draft.skills[groupIndex][field] = value;
		});
	};

	const updateSkillItem = (groupIndex, itemIndex, field, value) => {
		mutateResume((draft) => {
			draft.skills[groupIndex].items[itemIndex][field] = value;
		});
	};

	const addSkillItem = (groupIndex) => {
		mutateResume((draft) => {
			draft.skills[groupIndex].items.push({iconKey: "", label: ""});
		});
	};

	const removeSkillItem = (groupIndex, itemIndex) => {
		mutateResume((draft) => {
			draft.skills[groupIndex].items.splice(itemIndex, 1);
		});
	};

	const moveSkillItem = (groupIndex, itemIndex, direction) => {
		mutateResume((draft) => {
			const items = draft.skills[groupIndex].items;
			const nextIndex = itemIndex + direction;

			if (nextIndex < 0 || nextIndex >= items.length) {
				return;
			}

			[items[itemIndex], items[nextIndex]] = [items[nextIndex], items[itemIndex]];
		});
	};

	const addSkillGroup = () => {
		mutateResume((draft) => {
			draft.skills.push({
				description: "",
				items: [{iconKey: "", label: ""}],
				key: `custom-${Date.now()}`,
				title: "",
			});
		});
	};

	const removeSkillGroup = (groupIndex) => {
		mutateResume((draft) => {
			draft.skills.splice(groupIndex, 1);
		});
	};

	const jumpToPanel = (panel) => {
		setActivePanel(panel);
	};

	const renderProfilePanel = () => (
		<section className="admin-editor-panel">
			<div className="admin-section-head">
				<div>
					<h2>{adminCopy.dataTitle}</h2>
					<p>Esta información se comparte entre todos los idiomas.</p>
				</div>
				<StatusPill saveState={saveState} />
			</div>
			<div className="admin-grid admin-grid-two">
				<label className="admin-field">
					<span>Nombre</span>
					<input
						value={adminResume.profile.name}
						onChange={(event) => updateProfileField("name", event.target.value)}
					/>
				</label>
				<label className="admin-field">
					<span>{adminCopy.birthDate}</span>
					<input
						type="date"
						value={adminResume.profile.birthDate ?? ""}
						onChange={(event) => updateProfileField("birthDate", event.target.value)}
					/>
				</label>
				<label className="admin-field">
					<span>Edad</span>
					<input value={getProfileAge(adminResume.profile)} readOnly />
				</label>
				<label className="admin-field">
					<span>Email</span>
					<input
						value={adminResume.profile.email}
						onChange={(event) => updateProfileField("email", event.target.value)}
					/>
				</label>
				<label className="admin-field">
					<span>Teléfono</span>
					<input
						value={adminResume.profile.phone}
						onChange={(event) => updateProfileField("phone", event.target.value)}
					/>
				</label>
				<label className="admin-field admin-field-wide">
					<span>Dirección</span>
					<input
						value={adminResume.profile.address}
						onChange={(event) => updateProfileField("address", event.target.value)}
					/>
				</label>
				<label className="admin-field">
					<span>Base</span>
					<input
						value={adminResume.profile.location}
						onChange={(event) => updateProfileField("location", event.target.value)}
					/>
				</label>
				<label className="admin-field">
					<span>Formación actual</span>
					<input
						value={adminResume.profile.study}
						onChange={(event) => updateProfileField("study", event.target.value)}
					/>
				</label>
				<label className="admin-field">
					<span>Campo</span>
					<input
						value={adminResume.profile.field}
						onChange={(event) => updateProfileField("field", event.target.value)}
					/>
				</label>
				<label className="admin-field admin-field-wide">
					<span>URL Portafolio</span>
					<input
						value={adminResume.profile.portfolioUrl}
						onChange={(event) => updateProfileField("portfolioUrl", event.target.value)}
					/>
				</label>
				<label className="admin-field admin-field-wide">
					<span>URL GitHub</span>
					<input
						value={adminResume.profile.githubUrl}
						onChange={(event) => updateProfileField("githubUrl", event.target.value)}
					/>
				</label>
			</div>
			<p className="admin-context-note">{adminCopy.autoAgeCaption}</p>
		</section>
	);

	const renderLocalePanel = () => (
		<section className="admin-editor-panel">
			<div className="admin-section-head">
				<div>
					<h2>{adminCopy.sharedTitle}</h2>
					<p>Edita el idioma activo manualmente. Cada idioma conserva su propio texto.</p>
				</div>
				<div className="locale-switcher">
					{localeOrder.map((option) => (
						<button
							key={option}
							type="button"
							className={`locale-chip ${selectedLocale === option ? "active" : ""}`}
							onClick={() => setSelectedLocale(option)}
						>
							{option}
						</button>
					))}
				</div>
			</div>
			<div className="admin-grid">
				<label className="admin-field admin-field-wide">
					<span>Rol principal</span>
					<input
						value={locale.role}
						onChange={(event) => updateLocaleField("role", event.target.value)}
					/>
				</label>
				<label className="admin-field admin-field-wide">
					<span>Acerca de mí</span>
					<textarea
						rows="5"
						value={locale.about}
						onChange={(event) => updateLocaleField("about", event.target.value)}
					/>
				</label>
			</div>
			<div className="admin-subsection">
				<div className="admin-subsection-head">
					<div>
						<h3>{adminCopy.notesTitle}</h3>
						<p>Piezas cortas que alimentan la columna del perfil.</p>
					</div>
					<button type="button" className="admin-inline-button" onClick={addLocaleNote}>
						{adminCopy.addNote}
					</button>
				</div>
				<div className="admin-list">
					{locale.profileNotes.map((note, index) => (
						<div className="admin-card" key={`note-${index}`}>
							<div className="admin-grid admin-grid-two">
								<label className="admin-field">
									<span>Etiqueta</span>
									<input
										value={note.label}
										onChange={(event) =>
											updateLocaleNote(index, "label", event.target.value)
										}
										placeholder={adminCopy.placeholderLabel}
									/>
								</label>
								<label className="admin-field">
									<span>Valor</span>
									<input
										value={note.value}
										onChange={(event) =>
											updateLocaleNote(index, "value", event.target.value)
										}
										placeholder={adminCopy.placeholderField}
									/>
								</label>
							</div>
							<button
								type="button"
								className="admin-remove-button"
								onClick={() => removeLocaleNote(index)}
							>
								{adminCopy.remove}
							</button>
							<div className="admin-card-actions">
								<button
									type="button"
									className="admin-inline-button"
									onClick={() => moveLocaleNote(index, -1)}
								>
									{adminCopy.reorderUp}
								</button>
								<button
									type="button"
									className="admin-inline-button"
									onClick={() => moveLocaleNote(index, 1)}
								>
									{adminCopy.reorderDown}
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);

	const renderCollectionPanel = (collection, title, description, actionLabel) => (
		<section className="admin-editor-panel">
			<div className="admin-section-head">
				<div>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<button
					type="button"
					className="admin-inline-button"
					onClick={() => addLocaleCollectionItem(collection)}
				>
					{actionLabel}
				</button>
			</div>
			<div className="admin-list">
				{locale[collection].map((entry, index) => (
					<div className="admin-card" key={`${collection}-${index}`}>
						<div className="admin-grid admin-grid-two">
							<label className="admin-field">
								<span>{collection === "education" ? "Título" : "Puesto"}</span>
								<input
									value={entry.job}
									onChange={(event) =>
										updateLocaleCollectionItem(
											collection,
											index,
											"job",
											event.target.value
										)
									}
								/>
							</label>
							<label className="admin-field">
								<span>{collection === "education" ? "Institución" : "Empresa"}</span>
								<input
									value={entry.company}
									onChange={(event) =>
										updateLocaleCollectionItem(
											collection,
											index,
											"company",
											event.target.value
										)
									}
								/>
							</label>
							<label className="admin-field">
								<span>Tiempo</span>
								<input
									value={entry.time}
									onChange={(event) =>
										updateLocaleCollectionItem(
											collection,
											index,
											"time",
											event.target.value
										)
									}
								/>
							</label>
							{collection === "education" ? (
								<label className="admin-field">
									<span>badgeIconKey</span>
									<input
										value={entry.badgeIconKey ?? ""}
										onChange={(event) =>
											updateLocaleCollectionItem(
												collection,
												index,
												"badgeIconKey",
												event.target.value
											)
										}
										placeholder={adminCopy.placeholderBadge}
									/>
								</label>
							) : null}
							<label className="admin-field admin-field-wide">
								<span>Contenido</span>
								<textarea
									rows="4"
									value={entry.content}
									onChange={(event) =>
										updateLocaleCollectionItem(
											collection,
											index,
											"content",
											event.target.value
										)
									}
									placeholder={adminCopy.placeholderContent}
								/>
							</label>
						</div>
						<button
							type="button"
							className="admin-remove-button"
							onClick={() => removeLocaleCollectionItem(collection, index)}
						>
							{adminCopy.remove}
						</button>
						<div className="admin-card-actions">
							<button
								type="button"
								className="admin-inline-button"
								onClick={() => moveLocaleCollectionItem(collection, index, -1)}
							>
								{adminCopy.reorderUp}
							</button>
							<button
								type="button"
								className="admin-inline-button"
								onClick={() => moveLocaleCollectionItem(collection, index, 1)}
							>
								{adminCopy.reorderDown}
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);

	const renderSkillsPanel = () => (
		<section className="admin-editor-panel">
			<div className="admin-section-head">
				<div>
					<h2>{adminCopy.skillsTitle}</h2>
					<p>{adminCopy.iconHint}</p>
				</div>
				<button type="button" className="admin-inline-button" onClick={addSkillGroup}>
					{adminCopy.addSkillGroup}
				</button>
			</div>
			<div className="admin-list">
				{adminResume.skills.map((group, groupIndex) => (
					<div className="admin-card" key={group.key}>
						<div className="admin-subsection-head">
							<div>
								<h3>{group.title ?? adminMicrocopy.skillGroups[group.key]?.title ?? group.key}</h3>
								<p>
									{adminMicrocopy.skillGroups[group.key]?.description ??
										"Listado compartido entre idiomas."}
								</p>
							</div>
							<button
								type="button"
								className="admin-inline-button"
								onClick={() => addSkillItem(groupIndex)}
							>
								{adminCopy.addSkill}
							</button>
						</div>
						<div className="admin-grid admin-grid-two">
							<label className="admin-field">
								<span>Nombre del bloque</span>
								<input
									value={group.title ?? ""}
									onChange={(event) =>
										updateSkillGroupField(groupIndex, "title", event.target.value)
									}
									placeholder={adminCopy.placeholderSkillGroup}
								/>
							</label>
							<label className="admin-field">
								<span>Descripción</span>
								<input
									value={group.description ?? ""}
									onChange={(event) =>
										updateSkillGroupField(
											groupIndex,
											"description",
											event.target.value
										)
									}
									placeholder={adminCopy.placeholderSkillDescription}
								/>
							</label>
						</div>
						<div className="admin-list compact">
							{group.items.map((item, itemIndex) => (
								<div className="admin-card mini" key={`${group.key}-${itemIndex}`}>
									<div className="admin-grid admin-grid-two">
										<label className="admin-field">
											<span>Nombre</span>
											<input
												value={item.label}
												onChange={(event) =>
													updateSkillItem(
														groupIndex,
														itemIndex,
														"label",
														event.target.value
													)
												}
											/>
										</label>
										<label className="admin-field">
											<span>Icono</span>
											<input
												value={item.iconKey}
												onChange={(event) =>
													updateSkillItem(
														groupIndex,
														itemIndex,
														"iconKey",
														event.target.value
													)
												}
												placeholder={adminCopy.placeholderIcon}
											/>
										</label>
									</div>
									<button
										type="button"
										className="admin-remove-button"
										onClick={() => removeSkillItem(groupIndex, itemIndex)}
									>
										{adminCopy.remove}
									</button>
									<div className="admin-card-actions">
										<button
											type="button"
											className="admin-inline-button"
											onClick={() => moveSkillItem(groupIndex, itemIndex, -1)}
										>
											{adminCopy.reorderUp}
										</button>
										<button
											type="button"
											className="admin-inline-button"
											onClick={() => moveSkillItem(groupIndex, itemIndex, 1)}
										>
											{adminCopy.reorderDown}
										</button>
									</div>
								</div>
							))}
						</div>
						<div className="admin-card-actions">
							<button
								type="button"
								className="admin-remove-button"
								onClick={() => removeSkillGroup(groupIndex)}
							>
								Eliminar bloque
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);

	const renderActivePanel = () => {
		switch (activePanel) {
			case "locale":
				return renderLocalePanel();
			case "experience":
				return renderCollectionPanel(
					"experiences",
					adminCopy.experienceTitle,
					"Edita este idioma manualmente, igual que en el CV original.",
					adminCopy.addExperience
				);
			case "education":
				return renderCollectionPanel(
					"education",
					adminCopy.educationTitle,
					"Edita este idioma manualmente, igual que en el CV original.",
					adminCopy.addEducation
				);
			case "skills":
				return renderSkillsPanel();
			case "profile":
			default:
				return renderProfilePanel();
		}
	};

	return (
		<div className="admin-shell">
			<div className="paper-noise" aria-hidden="true" />
			<main className="admin-stage admin-stage-editor">
				<section className="admin-hero">
					<div>
						<span className="hero-label">{adminCopy.adminTitle}</span>
						<h1>{adminCopy.adminTitle}</h1>
						<p>{adminCopy.dashboardLead}</p>
						<p className="admin-hint">{adminCopy.adminHint}</p>
					</div>
					<div className="admin-hero-actions">
						<button type="button" className="action-pill" onClick={onBackToCv}>
							<span>{adminCopy.viewCv}</span>
						</button>
						<button type="button" className="action-pill" onClick={onLogout}>
							<span>{adminCopy.logout}</span>
						</button>
						<button
							type="button"
							className="action-pill action-pill-primary"
							onClick={onSave}
						>
							<span>
								{saveState.status === "saving" ? adminCopy.saving : adminCopy.save}
							</span>
						</button>
					</div>
				</section>

				<section className="admin-workspace">
					<div className="admin-editor-column">
						<div className="admin-editor-nav">
							{panelOptions.map(([key, label]) => (
								<button
									key={key}
									type="button"
									className={`admin-panel-tab ${activePanel === key ? "active" : ""}`}
									onClick={() => setActivePanel(key)}
								>
									{label}
								</button>
							))}
						</div>
						{renderActivePanel()}
					</div>

					<section className="admin-preview-shell">
						<div className="admin-preview-head">
							<div>
								<span className="hero-label">{adminCopy.previewTitle}</span>
								<h2>{adminCopy.previewTitle}</h2>
								<p>Todo lo que cambias aquí se refleja al instante.</p>
							</div>
							<div className="locale-switcher">
								{localeOrder.map((option) => (
									<button
										key={option}
										type="button"
										className={`locale-chip ${selectedLocale === option ? "active" : ""}`}
										onClick={() => setSelectedLocale(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						<div className="admin-preview-toolbar">
							<button
								type="button"
								className="admin-inline-button"
								onClick={() => jumpToPanel("experience")}
							>
								{adminCopy.addExperience}
							</button>
							<button
								type="button"
								className="admin-inline-button"
								onClick={() => jumpToPanel("education")}
							>
								{adminCopy.addEducation}
							</button>
							<button
								type="button"
								className="admin-inline-button"
								onClick={() => jumpToPanel("skills")}
							>
								{adminCopy.addSkill}
							</button>
							<button
								type="button"
								className="admin-inline-button"
								onClick={() => jumpToPanel("locale")}
							>
								{adminCopy.addNote}
							</button>
						</div>
						<div className="admin-preview-frame">
							<PublicResume
								isEmbedded
								language={selectedLocale}
								notice=""
								resume={adminResume}
								setLanguage={setSelectedLocale}
							/>
						</div>
					</section>
				</section>
			</main>
		</div>
	);
}

export default AdminDashboard;
