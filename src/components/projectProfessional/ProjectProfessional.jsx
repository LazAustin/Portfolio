import "./projectProfessional.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const ProjectProfessional = ({img, link, title, desc1, desc2, desc3}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className="pf">
          <div className="pf-browser">
            <div className="pf-circle"></div>
            <div className="pf-circle"></div>
            <div className="pf-circle"></div>
          </div>
          <div className="pf-img-wrapper">
            <a href={link} target="_blank" rel="noreferrer noopener">
              <img src={img} alt="" className="pf-img" />
            </a>
          </div>
          <div className="pf-wrapper">
            <h4 className="pf-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>{title}</h4>
            {/* <div className="ul">
              <li className="pf-li"><b className="p-li-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>Frontend:</b> {desc1}</li>
              <li className="pf-li"><b className="p-li-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>Backend:</b> {desc2}</li>
              <li className="pf-li"><b className="p-li-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>Other:</b> {desc3}</li>
            </div> */}
          </div>
      </div>

  );
};

export default ProjectProfessional;
