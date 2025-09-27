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
          <div className="a-card a-bg" style={{backgroundColor: darkMode && "#FFC300"}} ></div>
          <div className="a-card a-img"></div>
        </div>
        <div className="a-right">
          <h2 className="a-title">About Me</h2>
          <blockquote className="quote" style={{color: darkMode && "#FFC300"}}>
            Success is not final; failure is not fatal: it is the courage to continue that counts.
          </blockquote>
          <figcaption className="fig" style={{color: darkMode && "#FFC300"}}>
            &mdash; <cite>Winston Churchill</cite>  </figcaption>
          <p className="a-desc">
            Ever since I first programmed an Arduino in college, I’ve been hooked on software development. Coding is not just fun—it’s a way to bring my diverse interests to life, from enhancing hobbies to tackling new challenges. The ever-evolving tech landscape keeps me learning and inspired, and I love that every project has the potential to make a real impact. Check out my GitHub, Stack Overflow, LinkedIn, or blog to learn more about me and my work!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
