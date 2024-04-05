import React from "react";
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

function A(props: { html: string; options: object }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(props.html, {
          ...defaultOptions,
          ...props.options,
        }),
      }}
    />
  );
}

const CustomHtml = { A };

export default CustomHtml;
