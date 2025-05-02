import React, { useState } from "react";
import "./Codepen.css";
import Console from "./Console.jsx";
import Editor from "./Editor.jsx";

const Codepen = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  // Console modal handle
  const handleConsole = () => {
    setIsConsoleOpen(!isConsoleOpen);
  };

  const srcDoc = `
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  `;
  return (
    <>
      <div className="codepen-container">
        <div className="editors-section">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor language="js" displayName="JS" value={js} onChange={setJs} />
        </div>
        <div className="result-section">
          <iframe
            title="output"
            frameborder="0"
            width="100%"
            height="100%"
            srcDoc={srcDoc}
            className="resultFrame"
          />
        </div>
        {isConsoleOpen && (
          <Console value={js} isOpen={isConsoleOpen} onClose={handleConsole} />
        )}
        <div className="console-container">
          <button className="console" onClick={handleConsole}>
            Console
          </button>
        </div>
      </div>
    </>
  );
};

export default Codepen;
