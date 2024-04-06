import React from "react";
import { PropsType } from "./B.types";

export default function B(props: PropsType) {
  return (
    <section>
      <div className="flex justify-between">
        <div
          className="border-2 border-primary/80 bg-primary/5 flex flex-col items-center py-4 rounded-3xl"
          style={{ width: `${23}vw` }}
        >
          <img src="https://www.saugatonline.com/products_image/0fea5464dea61d20c516c2c0504e6ce7.jpg" />
          <div>
            <h2>New brown bag</h2>
            <p>$2000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
