import React from "react";
import EmailEditor, { EditorRef } from "react-email-editor";

export default function App() {
  const emailEditorRef = React.useRef<EditorRef>(null);
  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "template.html";
      link.href = url;
      link.click();
    });
  };
  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <EmailEditor ref={emailEditorRef} />
    </div>
  );
}
