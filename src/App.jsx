import { useState } from 'react'
import './App.css'
import { ExpCards, InfoPrint, SkillsImg } from './functions'

function App() {

    const [skills, setSkills] = useState([])
    const [imageUrl, setImageUrl] = useState("");

    const [visible, setVisible] = useState(false)

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
        if (imageUrl){
            setSkills([...skills, { img: imageUrl }]);
            setImageUrl("")
        }
    };

    const toggleVisible = () => {
        setVisible(!visible);
    };

    const addExperience = () => {
        if (job && company && time && content) {
            setExperiences([...experiences, { job, company, time, content }]);
            setJob("");
            setCompany("");
            setTime("");
            setContent("");
        } else {
            console.error("Por favor, ingrese todos los valores requeridos.");
        }
    }

    const addStudy = () => {
        if (jobS && companyS && timeS && contentS) {
            setExperiencesS([...experiencesS, { jobS, companyS, timeS, contentS }]);
            setJobS("");
            setCompanyS("");
            setTimeS("");
            setContentS("");
        } else {
            console.error("Por favor, ingrese todos los valores requeridos.");
        }
    }

  return (
    <>
      <div className="page-content">
        <div className="container">
            <div className="cover shadow-lg bg-white">
                <div className="cover-bg p-3 p-lg-4 text-white">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <div className="avatar hover-effect shadow-lg p-1"><img src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/fotoCv.png" height="200" className="shadow-lg bg-white"/></div>
                        </div>
                        <div className="col-lg-8 col-md-7 text-center text-md-start">
                            <h2 className="h1 mt-2">Kevin Villacreses</h2>
                            <p>Desarrollador Full Stack & Diseñador Gráfico</p>
                        </div>
                    </div>
                </div>
                <div className="about-section pt-4 px-3 px-lg-4 mt-1">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="h3 mb-3">Acerca de mí</h2>
                            <p>Hola!, soy Kevin VIllacreses, tengo 27 años. <br/> Desde los 13 me dediqué al diseño gráfico, ahora aplico mis conocimientos para complementarlo, en Desarrollo Web y de Aplicaciones.</p>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <div className="row mt-2">
                                <InfoPrint proper="Edad:" answer="27"/>
                                <InfoPrint proper="Email" answer="kevinvillajim@hotmail.com"/>
                                <InfoPrint proper="Teléfono:" answer="+593 963 368 896"/>
                                <InfoPrint proper="Dirección:" answer="5 Esquinas, Quito, Ecuador"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="d-print-none"/>
                <div className="skills-section px-3 px-lg-4">
                    <h2 className="h3 mb-3">Habilidades Profesionales</h2>
                    <div className="row">
                        <SkillsImg img={["https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png", "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png", "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png", "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/BS.png", "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png", "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/WP.png"]}/>
                        <SkillsImg img={["https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PS.png", "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ILL.png", "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PP.png", "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/SKU.png"]}/>
                        {skills.map((item, index) => (
                        <SkillsImg key={index} img={[item.img]} />
                        ))}
                        <button className={`btn-add ${visible ? "active" : ""}`} onClick={toggleVisible}><img src="https://www.svgrepo.com/show/2087/plus.svg" height="20px" alt="Plus Icon" /></button>
                        <div id='addSkills' style={{display: visible ? "inline" : "none"}}>
                            <input className='form-control mt-3' type="text" placeholder='Inserte la url de la imagen' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
                            <button onClick={addSkill} className="btn btn-primary mt-2 ">Agregar Habilidad</button>
                        </div>
                    </div>
                </div>
                <hr className="d-print-none"/>
                <div className="work-experience-section px-3 px-lg-4">
                    <h2 className="h3 mb-4">Experiencia de Trabajo</h2>
                    <div className="timeline">
                        <ExpCards color="primary" job="Contratista" company="Tejido Arquitectónico - Eco Domotic Home" time="02/2022 - Actual" content="Tareas realizadas: -Proyectos arquitectónicos -Supervisión de obra -Publicidad e imagen corportiva -Presupuestos y proformas -Seguridad Electrónica -Control de accesos -Sistemas integrales de seguridad"/>
                        <ExpCards color="primary" job="Dieñador Gráfico" company="Esparta Agencia Creativa" time="06/2019 - 09/2021" content="Tareas realizadas: -Publicidad, flyers, carteles, tarjetas de presentación -Imagen corporativa para empresas -Empaques de productos -Diseño y host de paginas Web en Wordpress"/>
                        <ExpCards color="primary" job="Dibujo de Planos Arquitectónicos" company="Arq. Iván Cilio CONSTRUCTORES" time="05/2019 - 03/2020" content="Tareas realizadas: -Dibujo digital de proyectos 2D y 3D en AutoCAD y ArchiCAD. -Levantamientos arquitectónicos -Proyectos y cotizaciones"/>
                        <ExpCards color="primary" job="Marketing y Publicidad" company="INALPAC" time="08/2018 - 05/2019" content="Tareas realizadas: -Imagen corporativa -Nuevos Productos -Manejo de redes sociales -Estudios de Mercado -Proyectos de marketing digitales"/>
                        <ExpCards color="primary" job="Líder Regional de equipo, Asistente del presidente (Voluntariado)" company="Organización Mundial de Apoyo a la Familia y al Individuo ABIJSUD Brasil." time=" 11/2014 - 10/2016 (Porto Alegre - Brasil)" content="Tareas realizadas: -Charlas motivacionales para grupos medianos. -Entrenamiento de líderes y voluntarios. -Especialista en planificación estratégica con metas de corto, medio y largo plazo. -Rendición de cuentas regionales con reportes detallados."/>
                        {experiences.map((item, index) => (
                            <ExpCards key={index} color="primary" job={item.job} company={item.company} time={item.time} content={item.content} />
                        ))}
                        <button className={`btn-add ${visible ? "active" : ""}`} onClick={toggleVisible}><img src="https://www.svgrepo.com/show/2087/plus.svg" height="20px" alt="Plus Icon" /></button>
                        <div id='addExperience' style={{display: visible ? "inline" : "none"}}>
                            <input className='form-control mt-2' type="text" required placeholder='Ingrese el puesto que desempeñó (Gerente General)' value={job} onChange={(e) => setJob(e.target.value)}></input>
                            <input className='form-control mt-2' type="text" required placeholder='Ingrese la empresa en la cual trabajó (Nestlé)' value={company} onChange={(e) => setCompany(e.target.value)}></input>
                            <input className='form-control mt-2' type="text" required placeholder='Ingrese el rango de tiempo que se desempeñó en el empleo (12/2003 - 02/2005)' value={time} onChange={(e) => setTime(e.target.value)}></input>
                            <input className='form-control mt-2' type="text" required placeholder='Ingrese las tareas que realizó (Tareas realizadas: -Gestión y dirección de la empresa, -Proyección de crecimiento, ...)' value={content} onChange={(e) => setContent(e.target.value)}></input>
                            <button onClick={addExperience} className="btn btn-primary mt-2 ">Agregar Experiencia de Trabajo</button>
                        </div>
                    </div>
                </div>
                <hr className="d-print-none"/>
                <div className="page-break"></div>
                    <div className="education-section px-3 px-lg-4 pb-4">
                        <h2 className="h3 mb-4">Educación</h2>
                        <div className="timeline">
                            <ExpCards color="success" job="Técnico en Desarrollo Full Stack" company="FUNVAL Internacional" time="2024" content=""/>
                            <ExpCards color="success" job=" Inglés Nivel Avanzado II" company="Universidad Politécnica Nacional (CEC)" time="2017" content=""/>
                            <ExpCards color="success" job="Bachillerato General Unificado" company="Colegio Menor Universidad Central" time="2013" content=""/>
                            {experiencesS.map((item, index) => (
                                <ExpCards key={index} color="success" job={item.jobS} company={item.companyS} time={item.timeS} content={item.contentS} />
                            ))}
                            <button id='btnExp' className={`btn-add ${visible ? "active" : ""}`} onClick={toggleVisible}><img src="https://www.svgrepo.com/show/2087/plus.svg" height="20px" alt="Plus Icon" /></button>
                            <div id='addStudy' style={{display: visible ? "inline" : "none"}}>
                                <input className='form-control mt-2' type="text" required placeholder='Ingrese el título, curso, o formación (Ing. Desarrollo de Software)' value={jobS} onChange={(e) => setJobS(e.target.value)}></input>
                                <input className='form-control mt-2' type="text" required placeholder='Ingrese la institución educativa en la cual se formó (Harvard)' value={companyS} onChange={(e) => setCompanyS(e.target.value)}></input>
                                <input className='form-control mt-2' type="text" required placeholder='Ingrese el año de culminación de los estudios (2019)' value={timeS} onChange={(e) => setTimeS(e.target.value)}></input>
                                <input className='form-control mt-2' type="text" placeholder='Ingrese información adicional si es necesario (opcional)' value={contentS} onChange={(e) => setContentS(e.target.value)}></input>
                                <button id="btnStud" onClick={addStudy} className="btn btn-primary mt-2 ">Agregar Estudios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
