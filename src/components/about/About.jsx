import "./about.css";
import secondMe from './secondMe.JPG'
import { ThemeContext } from "../../context";
import { useContext } from "react";

const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg" style={{backgroundColor: darkMode && "#FFC300"}} ></div>
        <div className="a-card">
          <img
            src={secondMe}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
  <blockquote className="quote" style={{color: darkMode && "#FFC300"}}>
    Success is not final; failure is not fatal: it is the courage to continue that counts.
  </blockquote>
  <figcaption className="fig" style={{color: darkMode && "#FFC300"}}>
    &mdash; <cite>Winston Churchill</cite>  </figcaption>
        <p className="a-desc">
          Since the first time I picked up an Arduino in college and had to program it to make it do stuff, I've had a passion for software. For somebody like me with so many interests, not only is it just plain fun to code, it's a way to enhance so many other hobbies and passions. It also never gets boring, the technology and trends are constantly changing, developers are constantly learning, and last but not least, projects always have the potential to significantly improve lives. To learn more about me and my work, check out GitHub, Stack Overflow, or LinkedIn linked above or my blog below.
        </p>
      </div>
    </div>
  );
};

export default About;
