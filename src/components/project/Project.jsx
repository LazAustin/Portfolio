import "./project.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Project = ({img, link, title, desc1, desc2, desc3}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
            <h3 className="p-title" style={{color: darkMode && "#FFC300"}}>{title}</h3>
            <div className="ul">
              <li className="p-li"><b className="p-li-title" style={{color: darkMode && "#FFC300"}}>Frontend:</b> {desc1}</li>
              <li className="p-li"><b className="p-li-title" style={{color: darkMode && "#FFC300"}}>Backend:</b> {desc2}</li>
              <li className="p-li"><b className="p-li-title" style={{color: darkMode && "#FFC300"}}>Other:</b> {desc3}</li>
            </div>
          </div>
      </div>

  );
};

export default Project;
