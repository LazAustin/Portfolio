import "./projectPersonal.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const ProjectPersonal = ({img, link, title, subtitle, note, desc1, desc2, desc3}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <div className="p-img-wrapper">
            <a href={link} target="_blank" rel="noreferrer">
              <img src={img} alt="" className="p-img" />
            </a>
          </div>
          <div className="p-wrapper">
            <h4 className="p-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>{title}</h4>
            <p className="p-subtitle">{subtitle}</p>
            <p className="p-note">{note}</p>
            <div className="ul">
              <li className="p-li"><b className="p-li-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>Frontend:</b> {desc1}</li>
              <li className="p-li"><b className="p-li-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>Backend:</b> {desc2}</li>
              <li className="p-li"><b className="p-li-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>Other:</b> {desc3}</li>
            </div>
          </div>
      </div>

  );
};

export default ProjectPersonal;
