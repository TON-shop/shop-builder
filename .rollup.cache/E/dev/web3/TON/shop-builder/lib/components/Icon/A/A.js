import { jsx as _jsx } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
import icons from "./icons";
//Icons implementation by @marsian83 (https://github.com/marsian83)
export default function A(props) {
    return (_jsx("span", { children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", className: twMerge("fill-current w-[1em] h-[1em]", props.className, props.stroke && "stroke-[0.83em] stroke-front text-transparent"), style: {
                ...props.style,
                stroke: props.stroke,
            }, children: icons[props.icon] }) }));
}
//# sourceMappingURL=A.js.map