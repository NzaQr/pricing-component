import React, { useState } from "react";
import Card from "./Card";
import Switch from "./Switch";
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
      <h1 className="">Our Pricing</h1>
      <Switch option={option} handleToggle={handleToggle} />
      {priceComponent}
    </div>
  );
}
export default Content;
