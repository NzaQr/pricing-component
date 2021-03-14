import React from "react";

export default function Toggle({ option, handleToggle }) {
  return (
    <label className="switch">
      <input type="checkbox" option={option} onClick={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
}
