import React, { useState } from "react";
import Card from "./Card";
import Toggle from "./Toggle";
import Plan from "../Plan";
import "./content.css";

function Content() {
  const [option, setOption] = useState("monthly");

  const priceComponent = Plan.map((item) => (
    <Card key={item.name} card={item} option={option} />
  ));

  const handleToggle = () => {
    if (option === "monthly") {
      setOption("annually");
    } else {
      setOption("monthly");
    }
  };

  return (
    <div className="content">
      <h1 className="title">Our Pricing</h1>
      <div className="toggle-container">
        <span className="toggle-type">Monthly</span>
        <Toggle option={option} handleToggle={handleToggle} />
        <span className="toggle-type">Annually</span>
      </div>
      <div className="price-position">{priceComponent}</div>
    </div>
  );
}
export default Content;
