import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "../../Icon";
export default function A(props) {
    const { heroItems } = props;
    return (_jsx("section", { className: "overflow-x-scroll", children: _jsx("div", { className: "flex justify-between", style: { width: `${(heroItems.length / 4) * 100}%` }, children: heroItems.map((item, i) => (_jsxs("div", { className: "border-2 border-primary/80 bg-primary/5 flex flex-col items-center py-4 rounded-3xl", style: { width: `${23}vw` }, children: [_jsx(Icon.A, { icon: item, className: "text-[3rem] text-front" }), _jsx("p", { className: "capitalize", children: item })] }, i))) }) }));
}
//# sourceMappingURL=A.js.map