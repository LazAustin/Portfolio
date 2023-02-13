import "./project.css";

const Project = ({img, link, title, desc1, desc2, desc3}) => {
  return (
      <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <div className="img-wrapper">
            <a href={link} target="_blank" rel="noreferrer">
              <img src={img} alt="" className="p-img" />
            </a>
          </div>
          <div className="p-wrapper">
            <h4 className="title">{title}</h4>
            <div className="ul">
              <li><b>Frontend:</b> {desc1}</li>
              <li><b>Backend:</b> {desc2}</li>
              <li><b>Other:</b> {desc3}</li>
            </div>
          </div>
      </div>

  );
};

export default Project;
