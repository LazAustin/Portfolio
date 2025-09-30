import "./intro.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";
import MeNoBG2 from "../../img/lazProf2NoBGPNGCompressed.png"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Intro = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-navbar">
            <a href="#about" style={{color: darkMode && "#FFC300"}}>About</a>
            <a href="#project" style={{color: darkMode && "#FFC300"}}>Portfolio</a>
            <a href="#contact" style={{color: darkMode && "#FFC300"}}>Contact</a>
          </div>
          {/* <div className="i-maint-wrapper">
            <span className="i-maint-content">
              Please pardon the mess while I conduct some maintenance.
            </span>
          </div> */}
          <div className="i-intro">My name is</div>
          <h1 className="i-name">Laz Austin</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>Web Developer</div>
                  <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>App Developer</div>
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>Wordpress</div>
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>MERN Stack</div>
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>Android</div>
            </div>
          </div>
          <p className="i-desc">
          {/* By day, I am a full stack software developer.
          <br/>
          At night, I don my mask and cape to become a sci-fi and comic nerd, amateur linguist, bartender, blogger and commentator, chef, pianist, reader, and husband. 
          <br />
          Check out my Github, Stack Overflow, or LinkedIn links or feel free to contact me at the bottom of the page.  */}
          As a full-stack developer with a passion for code, I build custom, dynamic, and responsive websites that drive results.
            Through my work at a local marketing agency and various independent projects, I have the experience and skill to bring your ideas to life.
            Hit me up—explore my portfolio or reach out via the contact form below or my LinkedIn. 

            {/* my work blends technical expertise with creative problem-solving to deliver seamless user experiences.
            Let's connect—explore my portfolio or reach out via the contact form below or my LinkedIn. */}
          </p>
          <div className="i-btn-wrapper">
            <a href="#project" className="i-btn-link i-btn-link-1" style={{color: darkMode && "#FFD60A", borderColor: darkMode && "#FFD60A"}}>MY&nbsp;PORTFOLIO</a>
            <a href="#contact" className="i-btn-link i-btn-link-2" style={{color: darkMode && "#001D3D", backgroundColor: darkMode && "#FFD60A"}}>CONTACT&nbsp;ME</a>
          </div>
          <div className="introLinkWrapper" style={{color: darkMode && "#FFD60A"}}>
            <div className="tooltip" style={{color: darkMode && "#FFD60A"}}>
              <a href="https://linkedin.com/in/lazaustin" >
                <FaLinkedin className="introLinks" style={{color: darkMode && "#FFD60A"}}/>
                <span className="tooltiptext" style={{color: darkMode ? "#FFD60A" : "#001D3D"}}><b>LinkedIn</b></span>
              </a>
            </div>
            <div className="tooltip">
              <a href="https://github.com/LazAustin">
                <FaGithub className="introLinks" style={{color: darkMode && "#FFD60A"}}/>
                <span className="tooltiptext" style={{color: darkMode ? "#FFD60A"  : "#001D3D"}}><b>Github</b></span>
              </a>
            </div>
            <div className="tooltip" style={{color: darkMode && "#FFD60A"}}>  
              <a href="https://stackoverflow.com/users/12333367/laz-austin" >
                <FaStackOverflow className="introLinks" style={{color: darkMode && "#FFD60A"}}/>
                <span className="tooltiptext" style={{color: darkMode ? "#FFD60A": "#001D3D"}}><b>Stack<br/>Overflow</b></span>
              </a>  
            </div>  
              
          </div>
        </div>
        {/* <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg> */}
      </div>
      <div className="i-right">
        <div className="i-bg" style={{backgroundColor: darkMode && "#FFC300"}}></div>
        <img src={MeNoBG2} alt="" className="i-img" />
        <img src={MeNoBG2} alt="" className="i-img-Mobile" />
        <div className="introLinkWrapper-Mobile" style={{color: darkMode && "#001D3D"}}>
          <div className="tooltip" style={{color: darkMode && "#001D3D"}}>
              <a href="https://linkedin.com/in/lazaustin" >
                <FaLinkedin className="introLinks-Mobile" style={{color: darkMode && "#001D3D"}}/>
                <span className="tooltiptext-Mobile" style={{color: darkMode ? "#001D3D" : "white"}}><b>LinkedIn</b></span>
              </a>
            </div>
            <div className="tooltip" style={{color: darkMode && "#001D3D"}}>
              <a href="https://github.com/LazAustin">
                <FaGithub className="introLinks-Mobile" style={{color: darkMode && "#001D3D"}}/>
                <span className="tooltiptext-Mobile" style={{color: darkMode ? "#001D3D"  : "white"}}><b>Github</b></span>
              </a>
            </div>
            <div className="tooltip" style={{color: darkMode && "#001D3D"}}>  
              <a href="https://stackoverflow.com/users/12333367/laz-austin" >
                <FaStackOverflow className="introLinks-Mobile" style={{color: darkMode && "#001D3D"}}/>
                <span className="tooltiptext-Mobile" style={{color: darkMode ? "#001D3D": "white"}}><b>Stack<br/>Overflow</b></span>
              </a>  
            </div>  
              
            <div className="tooltip tooltip-filler" style={{color: darkMode && "#001D3D"}} id="tooltip-filler">
              <a href="https://linkedin.com/in/lazaustin" >
                <FaLinkedin className="introLinks-Mobile" style={{color: darkMode && "#001D3D"}}/>
                <span className="tooltiptext-Mobile" style={{color: darkMode ? "#001D3D" : "white"}}><b>LinkedIn</b></span>
              </a>
            </div>  
          </div>
      </div>
    </div>
  );
};

export default Intro;
