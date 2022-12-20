import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <p className="open-source-code">
        <a
          href="https://github.com/AleksaKovpan/weather-project_shecodes"
          target="_blank"
          className="git-link"
        >
          Open-source code
        </a>
        , by Oleksandra Kovpan
      </p>
    </div>
  );
}
