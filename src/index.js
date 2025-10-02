import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css';
import { ThemeProvider } from "./context";

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
