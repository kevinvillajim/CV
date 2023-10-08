/* eslint-disable react/prop-types */

function InfoPrint({proper, answer}){
    return(
        <>
            <div className="col-sm-4">
                <div className="pb-1"><strong>{proper}</strong></div>
            </div>
            <div className="col-sm-8">
                <div className="pb-1 text-secondary">{answer}</div>
            </div>
        </>
    )
}

export {InfoPrint};

function AddImgs({ img }) {
    return (
      <>
        {img.map((src, i) => (<img key={i} className="icons hover-effect m-1" height="50" src={src}/>))}
      </>
    );
  }

function SkillsImg({img}){  

    return(
        <>
            <div className="col-md-6 text-center">
                <AddImgs img={img}/>
            </div>
        </>
    )
}

export {SkillsImg};

function ExpCards({color, job, company, time, content}){
    return(
        <>
            <div className={`timeline-card timeline-card-${color} card shadow-sm`}>
                <div className="card-body">
                    <div className="h5 mb-1">{job} <span className="text-muted h6">{company}</span></div>
                    <div className="text-muted text-small mb-2">{time}</div>
                    <div>{content}</div>
                </div>
            </div>
        </>    
    )    
}

export {ExpCards};

