import "./about.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="a" id="about">
      <div className="a-wrapper">
        <div className="a-left">
          <div className="a-card a-bg" style={{backgroundColor: darkMode && "#FFC300"}}></div>
          <div className="a-card a-img"></div>
        </div>
        <div className="a-right">
          <h2 className="a-title" style={{color: darkMode && "#FFC300"}}>About Me</h2>
          {/* <blockquote className="quote" style={{color: darkMode && "#FFC300"}}>
            Success is not final; failure is not fatal: it is the courage to continue that counts.
          </blockquote> */}
          {/* <figcaption className="fig" style={{color: darkMode && "#FFC300"}}>
            &mdash; <cite>Winston Churchill</cite>  
          </figcaption> */}
          <div className="a-desc">
            {/* Ever since I first programmed an Arduino in college, I’ve been hooked on software development. Coding is not just fun—it’s a way to bring my diverse interests to life, from enhancing hobbies to tackling new challenges. The ever-evolving tech landscape keeps me learning and inspired, and I love that every project has the potential to make a real impact. Check out my GitHub, Stack Overflow, LinkedIn, or blog to learn more about me and my work! */}
            <p>Hailing from Mississippi, my self-taught journey began by programming an Arduino as an Electrical Engineering major
             at Mississippi State, igniting a passion for software that can solve real-world problems. </p>
            <p>As a self-professed nerd with various interests, I realized code is the common denominator; 
              that it powers everything from satellites in space, to the TV in your living room. </p>
            <p>Understanding that, I passionately believe everyone should have a website, whether you’re a Fortune 500 company, 
              a local family-owned restaurant, or a freelancer. 
              Together we can bring your vision to life with one of your own, 
              whether it be a CMS like WordPress or a fully-custom full-stack application.</p>
          </div>
          <div className="btn-wrapper">
            <a href="#project" className="btn-link btn-link-1" style={{color: darkMode && "#FFD60A", borderColor: darkMode && "#FFD60A"}}>MY&nbsp;PORTFOLIO</a>
            <a href="#contact" className="btn-link btn-link-2" style={{color: darkMode && "#001D3D", backgroundColor: darkMode && "#FFD60A"}}>CONTACT&nbsp;ME</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
