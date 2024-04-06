import React from "react";
import { twMerge } from "tailwind-merge";
import { propsType } from "./B.types";
import Icon from "../../Icon";

export default function B(props: propsType) {
  const { navbarItems } = props;

  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setExpanded(!expanded)}
        className={twMerge(
          "z-10 fixed top-3 right-6 hover:cursor-pointer border border-foreground p-1 rounded-full",
          expanded
            ? "text-background/80 border-background/80 rounded-full"
            : "text-foreground"
        )}
      >
        <Icon.A
          icon={expanded ? "close" : "menu"}
          className={twMerge(expanded ? "text-[1.5rem]" : "text-[2rem]")}
        />
      </div>
      <nav
        className={twMerge(
          "fixed top-0 right-0 bg-foreground/90 backdrop-blur-lg h-full pr-8 pl-4 pb-4 pt-12 border-2 duration-300 ease-in rounded-l-3xl z-1",
          expanded ? "" : "translate-x-[100%]"
        )}
      >
        <div className="border-b-2 border-back/60 pb-4 flex gap-x-4 items-center">
          <img
            src="https://randomuser.me/api/portraits/women/8.jpg"
            className="rounded-full w-[15vw] border-primary/50 border-2 p-1"
          />
          <div className="flex flex-col text-back">
            <p className="text-[0.8rem]">Good Day 👋</p>
            <h1 className="text-xl font-semibold">My name</h1>
            <p></p>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 pt-4 ">
          {navbarItems.map((item, i) => (
            <div
              className={twMerge(
                "flex items-center gap-x-4 text-back",
                i == 1 && "font-bold text-primary"
              )}
            >
              <Icon.A icon={item} key={i} className="text-[1.8rem] " />
              <p className="text-lg capitalize">{item}</p>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
