import { jsx as _jsx } from "react/jsx-runtime";
import sanitizeHtml from "sanitize-html";
const defaultOptions = {
    allowedTags: ["b", "i", "em", "strong", "a", "h1", "div", "img"],
    allowedAttributes: {
        a: ["href"],
        "*": ["style", "align", "alt", "center", "bgcolor"],
        img: ["src"],
    },
    allowedIframeHostnames: ["www.youtube.com"],
};
export default function A(props) {
    return (_jsx("div", { dangerouslySetInnerHTML: {
            __html: sanitizeHtml(props.html, {
                ...defaultOptions,
                ...props.options,
            }),
        } }));
}
//# sourceMappingURL=A.js.map