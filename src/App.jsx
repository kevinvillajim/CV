import {useState} from "react";
import "./App.css";
import {ExpCards, InfoPrint, SkillsImg} from "./functions";
import translationES from "./languages/translationES";
import translationEN from "./languages/translationEN";
import translationPR from "./languages/translationPR";

function App() {
	const [skills, setSkills] = useState([]);
	const [imageUrl, setImageUrl] = useState("");

	const [visible, setVisible] = useState(false);
	const [language, setLanguage] = useState("ES");
	const translations =
		language === "ES"
			? translationES
			: language === "EN"
			? translationEN
			: translationPR;

	const [experiences, setExperiences] = useState([]);
	const [job, setJob] = useState("");
	const [company, setCompany] = useState("");
	const [time, setTime] = useState("");
	const [content, setContent] = useState("");

	const [experiencesS, setExperiencesS] = useState([]);
	const [jobS, setJobS] = useState("");
	const [companyS, setCompanyS] = useState("");
	const [timeS, setTimeS] = useState("");
	const [contentS, setContentS] = useState("");

	const addSkill = () => {
		if (imageUrl) {
			setSkills([...skills, {img: imageUrl}]);
			setImageUrl("");
		}
	};

	const toggleVisible = () => {
		setVisible(!visible);
	};

	const addExperience = () => {
		if (job && company && time && content) {
			setExperiences([...experiences, {job, company, time, content}]);
			setJob("");
			setCompany("");
			setTime("");
			setContent("");
		} else {
			console.error("Por favor, ingrese todos los valores requeridos.");
		}
	};

	const addStudy = () => {
		if (jobS && companyS && timeS && contentS) {
			setExperiencesS([...experiencesS, {jobS, companyS, timeS, contentS}]);
			setJobS("");
			setCompanyS("");
			setTimeS("");
			setContentS("");
		} else {
			console.error("Por favor, ingrese todos los valores requeridos.");
		}
	};

	return (
		<>
			<div className="page-content">
				<div className="container">
					<div className="cover shadow-lg bg-white">
						<div className="cover-bg p-3 p-lg-4 text-white">
							<div className="row">
								<div className="col-lg-4 col-md-5">
									<div className="avatar hover-effect shadow-lg p-1">
										<img
											src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/fotoCv.png"
											height="200"
											className="shadow-lg bg-white"
										/>
									</div>
								</div>
								<div className="col-lg-8 col-md-7 text-center text-md-start">
									<h2 className="h1 mt-2">Kevin Villacreses</h2>
									<p>{translations.titleDescription}</p>
									<a
										href="https://kevinvillajim.github.io/Portfolio/"
										target="_blank"
										rel="noreferrer"
										className="btn btn-outline-dark rounded-pill px-2 py-2 me-2 border-white"
									>
										<img
											src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PF.png"
											height="30px"
											alt="Portfolio Icon"
										/>
									</a>
									<a
										href="https://github.com/kevinvillajim"
										target="_blank"
										rel="noreferrer"
										className="btn btn-outline-dark rounded-pill px-2 py-2 me-2 border-white"
									>
										<img
											src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.svg"
											height="30px"
											alt="GitHub Icon"
										/>
									</a>
									<button
										className="btn btn-outline-dark rounded-pill px-2.5 py-2 me-2 border-white text-white"
										onClick={() => {
											setLanguage(
												language === "ES"
													? "EN"
													: language === "EN"
													? "PR"
													: "ES"
											);
										}}
									>
										{language === "ES" ? (
											<img
												src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ES.png"
												height="30px"
												alt="ES Language"
											/>
										) : language === "EN" ? (
											<img
												src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/EN.png"
												height="30px"
												alt="EN Language"
											/>
										) : (
											<img
												src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PR.png"
												height="30px"
												alt="PR Language"
											/>
										)}
									</button>
								</div>
							</div>
						</div>
						<div className="about-section pt-4 px-3 px-lg-4 mt-1">
							<div className="row">
								<div className="col-md-6">
									<h2 className="h3 mb-3">{translations.titleMe}</h2>
									<p>{translations.me}</p>
								</div>
								<div className="col-md-5 offset-md-1">
									<div className="row mt-2">
										<InfoPrint proper={translations.titleAge} answer="27" />
										<InfoPrint
											proper="Email:"
											answer="kevinvillajim@hotmail.com"
										/>
										<InfoPrint
											proper={translations.titleTelephone}
											answer="+593 963 368 896"
										/>
										<InfoPrint
											proper={translations.titleAddress}
											answer="5 Esquinas, Quito, Ecuador"
										/>
									</div>
								</div>
							</div>
						</div>
						<hr className="d-print-none" />
						<div className="skills-section px-3 px-lg-4">
							<h2 className="h3 mb-3">{translations.titleProfesionalSkills}</h2>
							<div className="row">
								<SkillsImg
									img={[
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/BS.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/WP.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PHP.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/MYSQL.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/TW.svg",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/LV.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
									]}
								/>
								<SkillsImg
									img={[
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PS.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ILL.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PP.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/SKU.png",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ACpng",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ACADpng",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PBpng",
										"https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/FLpng",
									]}
								/>
								{skills.map((item, index) => (
									<SkillsImg key={index} img={[item.img]} />
								))}
								<button
									className={`btn-add ${visible ? "active" : ""}`}
									onClick={toggleVisible}
								>
									<img
										src="https://www.svgrepo.com/show/2087/plus.svg"
										height="20px"
										alt="Plus Icon"
									/>
								</button>
								<div
									id="addSkills"
									style={{display: visible ? "inline" : "none"}}
								>
									<input
										className="form-control mt-3"
										type="text"
										placeholder={translations.placeholderSkill}
										value={imageUrl}
										onChange={(e) => setImageUrl(e.target.value)}
									></input>
									<button onClick={addSkill} className="btn btn-primary mt-2 ">
										{translations.buttonSkill}
									</button>
								</div>
							</div>
						</div>
						<hr className="d-print-none" />
						<div className="work-experience-section px-3 px-lg-4">
							<h2 className="h3 mb-4">{translations.titleExperience}</h2>
							<div className="timeline">
								<ExpCards
									color="primary"
									job={translations.firstJob}
									company={translations.firstCompany}
									time={translations.firstTime}
									content={translations.firstContent}
								/>
								<ExpCards
									color="primary"
									job={translations.secondJob}
									company={translations.secondCompany}
									time={translations.secondTime}
									content={translations.secondContent}
								/>
								<ExpCards
									color="primary"
									job={translations.thirdJob}
									company={translations.thirdCompany}
									time={translations.thirdTime}
									content={translations.thirdContent}
								/>
								<ExpCards
									color="primary"
									job={translations.fourthJob}
									company={translations.fourthCompany}
									time={translations.fourthTime}
									content={translations.fourthContent}
								/>
								<ExpCards
									color="primary"
									job={translations.fifthJob}
									company={translations.fifthCompany}
									time={translations.fifthTime}
									content={translations.fifthContent}
								/>
								{experiences.map((item, index) => (
									<ExpCards
										key={index}
										color="primary"
										job={item.job}
										company={item.company}
										time={item.time}
										content={item.content}
									/>
								))}
								<button
									className={`btn-add ${visible ? "active" : ""}`}
									onClick={toggleVisible}
								>
									<img
										src="https://www.svgrepo.com/show/2087/plus.svg"
										height="20px"
										alt="Plus Icon"
									/>
								</button>
								<div
									id="addExperience"
									style={{display: visible ? "inline" : "none"}}
								>
									<input
										className="form-control mt-2"
										type="text"
										required
										placeholder={translations.placeholderJob}
										value={job}
										onChange={(e) => setJob(e.target.value)}
									></input>
									<input
										className="form-control mt-2"
										type="text"
										required
										placeholder={translations.placeholderCompany}
										value={company}
										onChange={(e) => setCompany(e.target.value)}
									></input>
									<input
										className="form-control mt-2"
										type="text"
										required
										placeholder={translations.placeholderTime}
										value={time}
										onChange={(e) => setTime(e.target.value)}
									></input>
									<input
										className="form-control mt-2"
										type="text"
										required
										placeholder={translations.placeholderContent}
										value={content}
										onChange={(e) => setContent(e.target.value)}
									></input>
									<button
										onClick={addExperience}
										className="btn btn-primary mt-2 "
									>
										{translations.buttonExperience}
									</button>
								</div>
							</div>
						</div>
						<hr className="d-print-none" />
						<div className="page-break"></div>
						<div className="education-section px-3 px-lg-4 pb-4">
							<h2 className="h3 mb-4">{translations.titleEducation}</h2>
							<div className="timeline">
								<ExpCards
									color="success"
									job={translations.firstStudy}
									company={translations.firstInstitution}
									time={translations.firstSTime}
									content=""
								/>
								<ExpCards
									color="success"
									job={translations.secondStudy}
									company={translations.secondInstitution}
									time={translations.secondSTime}
									content={
										<img
											src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CISCO.png"
											height="100px"
											alt="Cisco Certification"
										/>
									}
								/>
								<ExpCards
									color="success"
									job={translations.thirdStudy}
									company={translations.thirdInstitution}
									time={translations.thirdSTime}
									content=""
								/>
								<ExpCards
									color="success"
									job={translations.fourthStudy}
									company={translations.fourthInstitution}
									time={translations.fourthSTime}
									content=""
								/>
								{experiencesS.map((item, index) => (
									<ExpCards
										key={index}
										color="success"
										job={item.jobS}
										company={item.companyS}
										time={item.timeS}
										content={item.contentS}
									/>
								))}
								<button
									id="btnExp"
									className={`btn-add ${visible ? "active" : ""}`}
									onClick={toggleVisible}
								>
									<img
										src="https://www.svgrepo.com/show/2087/plus.svg"
										height="20px"
										alt="Plus Icon"
									/>
								</button>
								<div
									id="addStudy"
									style={{display: visible ? "inline" : "none"}}
								>
									<input
										className="form-control mt-2"
										type="text"
										required
										placeholder={translations.placeholderTitle}
										value={jobS}
										onChange={(e) => setJobS(e.target.value)}
									></input>
									<input
										className="form-control mt-2"
										type="text"
										required
										placeholder={translations.placeholderInstitution}
										value={companyS}
										onChange={(e) => setCompanyS(e.target.value)}
									></input>
									<input
										className="form-control mt-2"
										type="text"
										required
										placeholder={translations.placeholderSTime}
										value={timeS}
										onChange={(e) => setTimeS(e.target.value)}
									></input>
									<input
										className="form-control mt-2"
										type="text"
										placeholder={translations.placeholderSContent}
										value={contentS}
										onChange={(e) => setContentS(e.target.value)}
									></input>
									<button
										id="btnStud"
										onClick={addStudy}
										className="btn btn-primary mt-2 "
									>
										{translations.buttonStudy}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
