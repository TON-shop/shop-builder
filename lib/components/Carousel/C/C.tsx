import React from "react";
import { twMerge } from "tailwind-merge";
import { propsType } from "./C.types";

export default function C(props: propsType) {
  const items = ["Clothes", "Jeans", "T-Shirt", "Tye-Dye", "Skirts"];
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={twMerge("", "bg-secondary")}>
          {item}
        </div>
      ))}
    </div>
  );
}
