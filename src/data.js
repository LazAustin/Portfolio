import screencapafc from './img/screencapafc.png';
import screencapblog from './img/screencapblog.png';
import screencaplm from './img/screencaplm.png';

export const projects = [
  {
    id: 1,
    img: screencapafc,
    link: "https://aldenforcongress.com",
    title: "Campaign Website",
    desc: "Campaigin Website for a colleague running for Congress. Written in basic HTML, CSS, Javascript, JQuery, Bootstrap, PHP, and SQL.",
  },
  {
    id: 2,
    img: screencaplm,
    link: "https://streaminglicensemanager.herokuapp.com",
    title: "Inventory Manager",
    desc: "CRUD app built to manage streaming video licenses for libraries and film distributors. Written on the MERN stack with MUI, JWT, and Redux Toolkit.",
  },
  {
    id: 3,
    img: screencapblog,
    link: "https://bloglazaustin.herokuapp.com",
    title: "Personal Blog",
    desc: "Full-stack blog written for myself and my hobbies. Another MERN stack app, but with Context for state management, Tailwind CSS, and several node packages including emailjs, TipTap, and more.",
  },

];
