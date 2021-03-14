import React from "react";

export default function Card({
  option,
  card: { type, priceMonthly, priceAnnually, storage, users, send },
}) {
  return (
    <div
      className="card"
      style={{
        background:
          type === "Professional"
            ? "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"
            : "#fff",
        transform: type === "Professional" ? "scale(1.15)" : "",
      }}
    >
      <p
        className="sub-type"
        style={{
          color: type === "Professional" ? "#fff" : "hsl(233, 13%, 49%)",
        }}
      >
        {type}
      </p>
      <p
        className="price"
        style={{
          color: type === "Professional" ? "#fff" : "hsl(232, 13%, 33%)",
        }}
      >
        {option === "monthly" ? priceMonthly : priceAnnually}
      </p>
      <ul
        style={{
          color: type === "Professional" ? "#fff" : "hsl(233, 13%, 49%)",
        }}
      >
        <li>{storage}</li>
        <li>{users}</li>
        <li>{send}</li>
      </ul>
      <button
        style={{
          background:
            type === "Professional"
              ? "#fff"
              : "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
          color: type === "Professional" ? "hsl(237, 63%, 64%)" : "#fff",
        }}
      >
        LEARN MORE
      </button>
    </div>
  );
}
