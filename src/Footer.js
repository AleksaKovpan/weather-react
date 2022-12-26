import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <p className="open-source-code">
        <a
          href="https://github.com/AleksaKovpan/weather-react"
          target="_blank"
          className="git-link"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by{" "}
        <a
          href="https://soft-cactus-a32fe4.netlify.app/"
          target="_blank"
          className="git-link"
          rel="noreferrer"
        >
          Oleksandra Kovpan
        </a>
      </p>
    </div>
  );
}
