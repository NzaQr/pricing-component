import React from "react";

export default function Card({
  option,
  card: { type, priceMonthly, priceAnnually, storage, users, send },
}) {
  return (
    <div
      className={`${type === "Professional" ? "card-professional" : "card"}`}
    >
      <p
        className={`${type === "Professional" ? "text-professional" : "text"}`}
      >
        {type}
      </p>
      <p
        className={`${
          type === "Professional" ? "price-professional" : "price"
        }`}
      >
        {option === "monthly" ? priceMonthly : priceAnnually}
      </p>
      <ul className={`${type === "Professional" ? "info-professional" : ""}`}>
        <li>{storage}</li>
        <li>{users}</li>
        <li>{send}</li>
      </ul>
      <button
        className={`${type === "Professional" ? "button-professional" : ""}`}
      >
        LEARN MORE
      </button>
    </div>
  );
}
