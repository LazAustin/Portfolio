import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl" id="project">
      <div className="pl-wrapper">
        <div className="pl-texts">
          <h1 className="pl-title">My Portfolio</h1>
          <p className="pl-desc">
            Here are some hightlights of my work. Besides the site you're on of course.
          </p>
        </div>
        <div className="pl-list">
          {projects.map((item) => (
            <Project 
              key={item.id} 
              img={item.img} 
              link={item.link} 
              title={item.title} 
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
