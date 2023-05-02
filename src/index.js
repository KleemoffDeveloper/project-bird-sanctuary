import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const scriptTags = document.querySelectorAll('script')
for(const tag of scriptTags){
  tag.remove()
}
