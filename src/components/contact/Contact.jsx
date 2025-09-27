import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "portfolio_template",
        formRef.current,
        "BHdTw7doJu0GGI8qd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg" style={{backgroundColor: darkMode && "#FFD60A"}}></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Need a developer?</h1>
          <div className="c-info">
            <a href="https://github.com/LazAustin" className="c-info-item" style={{color: darkMode && "#FFD60A"}}>
                <FaGithub className="c-icon"/>
                GitHub
            </a>
            <a href="https://stackoverflow.com/users/12333367/laz-austin" className="c-info-item" style={{color: darkMode && "#FFD60A"}}>
                <FaStackOverflow className="c-icon" />
                Stack Overflow
            </a>
            <a href="www.linkedin.com/in/lazaustin" className="c-info-item" style={{color: darkMode && "#FFD60A"}}>
                <FaLinkedin className="c-icon" />
                LinkedIn
            </a>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b style={{color: darkMode && "#FFC300"}}>How can I help?</b> Hit me up. I'm always looking for opportunities.<cite> &mdash; Laz </cite>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder="Message" name="message" />
            <button style={{backgroundColor: darkMode && "#FFD60A"}}>Submit</button>
            {done && "   Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
