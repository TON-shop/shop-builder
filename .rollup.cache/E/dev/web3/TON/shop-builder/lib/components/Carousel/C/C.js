import { jsx as _jsx } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
export default function C(props) {
    const items = ["Clothes", "Jeans", "T-Shirt", "Tye-Dye", "Skirts"];
    return (_jsx("div", { children: items.map((item, i) => (_jsx("div", { className: twMerge("", "bg-secondary"), children: item }, i))) }));
}
//# sourceMappingURL=C.js.map