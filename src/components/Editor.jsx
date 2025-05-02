import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import React from "react";
import { Controlled as Codemirror } from "react-codemirror2";

const Editor = (props) => {
  const { value, language, onChange, displayName } = props;

  const handleonBeforeChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className="editor">
      <div className="header">
        <h2 className="title">{displayName}</h2>
        <button>O/I</button>
      </div>
      <Codemirror
        className="editor-wrapper"
        value={value}
        onBeforeChange={handleonBeforeChange}
        options={{
          mode: language,
          theme: "material",
          Linter: true,
          lineNumbers: true,
          lineWrapper: true,
        }}
      />
    </div>
  );
};

export default Editor;
