import { useRef, useState } from "react";
import Icon from "../common/Icon";
import { twMerge } from "tailwind-merge";
import useClickOutside from "../hooks/useClickOutside";

const navbarItems = [
  "person",
  "analytics",
  "paid",
  "description",
  "logout",
] as const;

function A() {
  return (
    <nav className="text-back fixed bottom-0 left-0 flex justify-around w-full  bg-foreground rounded-t-3xl">
      {navbarItems.map((item, i) => (
        <div className={twMerge("flex-col items-center flex gap-y-1 text-back min-w-[15%] py-2 ", i == 1 && "-translate-y-6 rounded-full scale-125 bg-foreground" )}>
          <Icon icon={item} key={i} className="text-[2rem]" />
          <p className="text-[0.7rem] capitalize">{item}</p>
        </div>
      ))}
    </nav>
  );
}

function B(props: { name: string }) {
  return <>Hi {props.name}</>;
}

function C() {
  const [expanded, setExpanded] = useState(false);
  const outClickRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useClickOutside(outClickRef, () => {
    if (expanded) {
      setExpanded(false);
    }
  });

  return (
    <div>
      <div
        onClick={() => setExpanded(true)}
        className={twMerge(
          "z-10 hover:cursor-pointer",
          expanded ? "hidden" : ""
        )}
      >
        <Icon
          icon="menu"
          className="fixed top-2 left-2 text-[2rem] text-foreground"
        />
      </div>
      <nav
        className={twMerge(
          "fixed top-0 left-0 bg-foreground/90 backdrop-blur-lg h-full px-4 py-4 border-2 duration-300 ease-in rounded-r-3xl",
          expanded ? "" : "-translate-x-[100%]"
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
              <Icon icon={item} key={i} className="text-[1.8rem] " />
              <p className="text-lg capitalize">{item}</p>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

function D() {
  return (
    <nav className="text-back fixed bottom-0 left-0 flex justify-around w-full bg-foreground rounded-t-3xl py-2">
      {navbarItems.map((item, i) => (
        <div className="flex flex-col items-center justify-center gap-y-1 text-back relative py-1 min-w-[15%]">
          <div className={twMerge(i == 2 && "w-full h-full bg-primary/60 filter blur-[12px] absolute -z-1")}/>
            <Icon icon={item} key={i} className="text-[2rem]" />
            <p className="text-[0.7rem]">{item}</p>
        </div>
      ))}
    </nav>
  );
}

const Navbar = { A, B, C, D };

export default Navbar;
