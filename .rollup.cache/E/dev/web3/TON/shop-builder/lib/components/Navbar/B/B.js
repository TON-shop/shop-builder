import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { twMerge } from "tailwind-merge";
import Icon from "../../Icon";
export default function B(props) {
    const { navbarItems } = props;
    const [expanded, setExpanded] = React.useState(false);
    return (_jsxs("div", { className: "relative", children: [_jsx("div", { onClick: () => setExpanded(!expanded), className: twMerge("z-10 fixed top-3 right-6 hover:cursor-pointer border border-foreground p-1 rounded-full", expanded
                    ? "text-background/80 border-background/80 rounded-full"
                    : "text-foreground"), children: _jsx(Icon.A, { icon: expanded ? "close" : "menu", className: twMerge(expanded ? "text-[1.5rem]" : "text-[2rem]") }) }), _jsxs("nav", { className: twMerge("fixed top-0 right-0 bg-foreground/90 backdrop-blur-lg h-full pr-8 pl-4 pb-4 pt-12 border-2 duration-300 ease-in rounded-l-3xl z-1", expanded ? "" : "translate-x-[100%]"), children: [_jsxs("div", { className: "border-b-2 border-back/60 pb-4 flex gap-x-4 items-center", children: [_jsx("img", { src: "https://randomuser.me/api/portraits/women/8.jpg", className: "rounded-full w-[15vw] border-primary/50 border-2 p-1" }), _jsxs("div", { className: "flex flex-col text-back", children: [_jsx("p", { className: "text-[0.8rem]", children: "Good Day \uD83D\uDC4B" }), _jsx("h1", { className: "text-xl font-semibold", children: "My name" }), _jsx("p", {})] })] }), _jsx("div", { className: "flex flex-col gap-y-10 pt-4 ", children: navbarItems.map((item, i) => (_jsxs("div", { className: twMerge("flex items-center gap-x-4 text-back", i == 1 && "font-bold text-primary"), children: [_jsx(Icon.A, { icon: item, className: "text-[1.8rem] " }, i), _jsx("p", { className: "text-lg capitalize", children: item })] }))) })] })] }));
}
//# sourceMappingURL=B.js.map