import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
import Icon from "../../Icon";
export default function A(props) {
    const { navbarItems } = props;
    return (_jsx("nav", { className: "text-back fixed bottom-0 left-0 flex justify-around w-full  bg-foreground rounded-t-3xl", children: navbarItems.map((item, i) => (_jsxs("div", { className: twMerge("flex-col items-center flex gap-y-1 text-back min-w-[15%] py-2 ", i == 1 && "-translate-y-6 rounded-full scale-125 bg-foreground"), children: [_jsx(Icon.A, { icon: item, className: "text-[2rem]" }, i), _jsx("p", { className: "text-[0.7rem] capitalize", children: item })] }))) }));
}
//# sourceMappingURL=A.js.map