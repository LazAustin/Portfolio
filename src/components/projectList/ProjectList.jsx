import "./projectList.css";
import ProjectPersonal from "../projectPersonal/ProjectPersonal";
import ProjectProfessional from "../projectProfessional/ProjectProfessional";
import { projectsPers } from "../../dataPersonal";
import { projectsProf } from "../../dataProfessional";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const ProjectList = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="pl" id="project">
      <div className="pl-wrapper">
        <div className="pl-texts">
          <h2 className="pl-title" style={{color: darkMode ? "#FFC300" : "#001D3D"}}>My Portfolio</h2>
          <p className="pl-desc">
            {/* Here are some hightlights of my work as a professional at a local marketing agency plus some independent projects. Besides the site you're on of course. */}
            {/* I specialize in creating custom, dynamic, and responsive websites and applications
            via CMS platforms like Wordpress and other tech stacks. Explore my agency and freelance projects below,
            and let's connect so we can bring your ideas to life. */}
            I specialize in custom, dynamic, and responsive websites and applications, 
            leveraging CMS platforms like WordPress and modern tech stacks to deliver seamless user experiences. 
            Explore my agency and freelance projects below to see my work in action, 
            and let’s connect to bring your ideas to life. 
          </p>
        </div>
        <h3 className="pl-subtitle">Agency Projects</h3>
        <p className="pl-subtitle-text">
          {/* Do you need a custom and dynamic theme based on a CMS like Wordpress? 
          These are some examples of sites I worked on recently as part of a larger team at a local marketing agency.
          (Note: I do not own these sites, nor mean to take credit for creating the entire sites) */}
          As part of a dynamic team at a local marketing agency, 
          I've helped build numerous CMS-driven websites, primarily via custom themes in WordPress.
          These projects highlight my skills as a web designer and developer, delivering user-focused, high-performing solutions
          with diverse functionality. (Note: I contributed to these projects but do not claim full ownership.)
        </p>
        <div className="pl-list">
          {projectsProf.map((item) => (
            <ProjectProfessional 
              key={item.id} 
              img={item.img} 
              link={item.link} 
              title={item.title}
              desc1={item.desc1} 
              desc2={item.desc2} 
              desc3={item.desc3}/>
          ))}
        </div>
        <h3 className="pl-subtitle">Freelance Projects</h3>
        <p className="pl-subtitle-text">
          As a freelance developer, I've created custom, high-performing websites and applications, 
          from robust full-stack solutions to lightweight static sites.
          Check out some examples below that showcase my ability to deliver tailored, 
          user-focused experiences that bring client visions to life.
        </p>
        <div className="pl-list">
          {projectsPers.map((item) => (
            <ProjectPersonal 
              key={item.id} 
              img={item.img} 
              link={item.link} 
              title={item.title} 
              subtitle={item.subtitle}
              note={item.note} 
              desc1={item.desc1} 
              desc2={item.desc2} 
              desc3={item.desc3}/>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProjectList;
