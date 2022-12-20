import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="Enter city" className="search" />
        <input type="submit" value="Search" className="submit" />
        <input type="submit" value="Current" className="current" />
      </form>
    </div>
  );
}
