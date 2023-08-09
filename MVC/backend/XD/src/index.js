import React from "react";
import ReactDOM from "react-dom";

import { TextForm } from "./TextForm/TextForm";

function App() {
  return (
    <div>
      <TextForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
