import React, { ComponentProps } from "react";
import { Layout } from "../types";
import AllComponents, { ComponentVariety } from "../components";

interface LayoutBuilderProps {
  layout: Layout;
}

export default function LayoutBuilder(props: LayoutBuilderProps) {
  return (
    <>
      <p>adasdasd</p>
      {props.layout.map((el, key) =>
        React.createElement(
          AllComponents[el.name][
            el.variety as ComponentVariety<typeof el.name>
          ],
          { key, ...el.props }
        )
      )}
    </>
  );
}
