import "./intro.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";
import Me from "../../img/me.JPG";
import MeNoBG from "../../img/lazProfNoBGPNGCompressed.png"
import MeNoBG2 from "../../img/lazProf2NoBGPNGCompressed.png"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Intro = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-maint-wrapper">
            <span className="i-maint-content">Please pardon the mess while I conduct some maintenance.</span>
          </div>
          <div className="i-intro">My name is</div>
          <h1 className="i-name">Laz Austin</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>Web Developer</div>
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>Wordpress</div>
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>App Developer</div>
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>MERN Stack</div>
              <div className="i-title-item" style={{
                    color: darkMode && "#FFC300",
                  }}>Android</div>
            </div>
          </div>
          <p className="i-desc">
          By day, I am a full stack software developer.
          </p>
          <p className="i-desc">
          At night, I don my mask and cape to become a sci-fi and comic nerd, amateur linguist, bartender, blogger and commentator, chef, pianist, reader, and husband. 
          </p>
          <p className="i-desc">
          Check out my Github, Stack Overflow, or LinkedIn links or feel free to contact me at the bottom of the page. 
          </p>
          <div className="introLinkWrapper" style={{color: darkMode && "#FFD60A"}}>
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
            <div className="tooltip" style={{color: darkMode && "#FFD60A"}}>
              <a href="https://linkedin.com/in/lazaustin" >
                <FaLinkedin className="introLinks" style={{color: darkMode && "#FFD60A"}}/>
                <span className="tooltiptext" style={{color: darkMode ? "#FFD60A" : "#001D3D"}}><b>LinkedIn</b></span>
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
        <div className="introLinkWrapper-Mobile" style={{color: darkMode && "#FFD60A"}}>
            <div className="tooltip" style={{color: darkMode && "#FFD60A"}}>
              <a href="https://github.com/LazAustin">
                <FaGithub className="introLinks-Mobile" style={{color: darkMode && "#FFD60A"}}/>
                <span className="tooltiptext-Mobile" style={{color: darkMode ? "#FFD60A"  : "#001D3D"}}><b>Github</b></span>
              </a>
            </div>
            <div className="tooltip" style={{color: darkMode && "#FFD60A"}}>  
              <a href="https://stackoverflow.com/users/12333367/laz-austin" >
                <FaStackOverflow className="introLinks-Mobile" style={{color: darkMode && "#FFD60A"}}/>
                <span className="tooltiptext-Mobile" style={{color: darkMode ? "#FFD60A": "#001D3D"}}><b>Stack<br/>Overflow</b></span>
              </a>  
            </div>  
            <div className="tooltip" style={{color: darkMode && "#FFD60A"}}>
              <a href="https://linkedin.com/in/lazaustin" >
                <FaLinkedin className="introLinks-Mobile" style={{color: darkMode && "#FFD60A"}}/>
                <span className="tooltiptext-Mobile" style={{color: darkMode ? "#FFD60A" : "#001D3D"}}><b>LinkedIn</b></span>
              </a>
            </div>  
            <div className="tooltip tooltip-filler" style={{color: darkMode && "#FFD60A"}} id="tooltip-filler">
              <a href="https://linkedin.com/in/lazaustin" >
                <FaLinkedin className="introLinks-Mobile" style={{color: darkMode && "#FFD60A"}}/>
                <span className="tooltiptext-Mobile" style={{color: darkMode ? "#FFD60A" : "#001D3D"}}><b>LinkedIn</b></span>
              </a>
            </div>  
          </div>
      </div>
    </div>
  );
};

export default Intro;
