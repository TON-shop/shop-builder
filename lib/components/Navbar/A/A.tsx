import React from "react";
import { twMerge } from "tailwind-merge";
import { propsType } from "./A.types";
import Icon from "../../Icon";

export default function A(props: propsType) {
  const { navbarItems } = props;

  return (
    <nav className="text-back fixed bottom-0 left-0 flex justify-around w-full  bg-foreground rounded-t-3xl">
      {navbarItems.map((item, i) => (
        <div
          className={twMerge(
            "flex-col items-center flex gap-y-1 text-back min-w-[15%] py-2 ",
            i == 1 && "-translate-y-6 rounded-full scale-125 bg-foreground"
          )}
        >
          <Icon.A icon={item} key={i} className="text-[2rem]" />
          <p className="text-[0.7rem] capitalize">{item}</p>
        </div>
      ))}
    </nav>
  );
}
