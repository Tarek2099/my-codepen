import React, { useEffect, useState } from "react";

const Console = ({ value, isOpen, onClose }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    //Override console methods
    const originalConsole = { ...console };
    const captureLog = (...args) => {
      setLogs((prev) => [...prev, { type: "log", content: args.join(" ") }]);
      originalConsole.log(...args);
    };
    console.log = captureLog;

    try {
      // Execute the Js Code
      new Function(value)();
    } catch (error) {
      setLogs((prev) => [...prev, { type: "log", content: error.message }]);
    }
    // Cleanup
    return () => {
      console.log = originalConsole.log;
    };
  }, [value]);

  return (
    <div className="console-window">
      <button className="close" onClick={() => !isOpen}>
        Close
      </button>
      <div className="value">
        {value &&
          logs.map((log, index) => (
            <div key={index} className={`console-line ${log.type}`}>
              {log.content}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Console;
