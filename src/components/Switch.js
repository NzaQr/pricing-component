import React from "react";

export default function Switch({ option, handleToggle }) {
  return (
    <label class="switch">
      <input type="checkbox" option={option} onClick={handleToggle} />
      <span class="slider round"></span>
    </label>
  );
}
