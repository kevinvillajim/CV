/* eslint-disable react/prop-types */

function InfoPrint({proper, answer}) {
	return (
		<div className="detail-row">
			<span className="detail-key">{proper}</span>
			<span className="detail-value">{answer}</span>
		</div>
	);
}

export {InfoPrint};

function SkillsImg({title, description, items}) {
	return (
		<article className="skill-cluster">
			<div className="skill-cluster-head">
				<div>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
			<div className="skill-list">
				{items.map((item) => (
					<div className="skill-pill" key={item.label}>
						{item.icon ? <img src={item.icon} alt={item.label} /> : null}
						<span>{item.label}</span>
					</div>
				))}
			</div>
		</article>
	);
}

export {SkillsImg};

function formatContent(content) {
	if (!content) {
		return null;
	}

	if (typeof content !== "string") {
		return <div className="entry-rich-content">{content}</div>;
	}

	const cleaned = content.replace(/^[^:]+:\s*/, "").trim();
	const points = cleaned
		.split(/\s*-\s*/)
		.map((item) => item.trim())
		.filter(Boolean);

	if (points.length > 1) {
		return (
			<ul className="entry-list">
				{points.map((point, index) => (
					<li key={`${point}-${index}`}>{point}</li>
				))}
			</ul>
		);
	}

	return <p className="entry-copy">{content}</p>;
}

function ExpCards({index, tone, job, company, time, content, badgeIcon}) {
	return (
		<article className={`entry-card entry-card-${tone}`}>
			<div className="entry-main">
				<div className="entry-top">
					<div className="entry-top-meta">
						<span className="entry-index">{index}</span>
						<div className="entry-time">{time}</div>
					</div>
					<div className="entry-title-block">
						<h3>{job}</h3>
						<span>{company}</span>
					</div>
				</div>
				<div className="entry-body">
					{badgeIcon ? (
						<div className="entry-rich-content">
							<img src={badgeIcon} alt={company} className="cisco-badge" />
						</div>
					) : null}
					{formatContent(content)}
				</div>
			</div>
		</article>
	);
}

export {ExpCards};
