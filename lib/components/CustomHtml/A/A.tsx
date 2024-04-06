import React from "react";
import sanitizeHtml from "sanitize-html";
import { propsType } from "./A.types";

const defaultOptions = {
  allowedTags: ["b", "i", "em", "strong", "a", "h1", "div", "img"],
  allowedAttributes: {
    a: ["href"],
    "*": ["style", "align", "alt", "center", "bgcolor"],
    img: ["src"],
  },
  allowedIframeHostnames: ["www.youtube.com"],
};

export default function A(props: propsType) {
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
