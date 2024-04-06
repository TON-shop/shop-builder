import React from "react";
import { PropsType } from "./A.types";
import Icon from "../../Icon";

export default function A(props: PropsType) {
  const { heroItems } = props;

  return (
    <section className="overflow-x-scroll">
      <div
        className="flex justify-between"
        style={{ width: `${(heroItems.length / 4) * 100}%` }}
      >
        {heroItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-primary/80 bg-primary/5 flex flex-col items-center py-4 rounded-3xl"
            style={{ width: `${23}vw` }}
          >
            <Icon.A icon={item} className="text-[3rem] text-front" />
            <p className="capitalize">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
