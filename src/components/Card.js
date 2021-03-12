import React from "react";

export default function Card({
  option,
  card: { type, priceMonthly, priceAnnually, storage, users, send },
}) {
  return (
    <div className="card-container">
      <p className="sub-type">{type}</p>
      <p className="price">
        {option === "monthly" ? priceMonthly : priceAnnually}
      </p>
      <ul>
        <li>{storage}</li>
        <li>{users}</li>
        <li>{send}</li>
      </ul>
      <button>LEARN MORE</button>
    </div>
  );
}
