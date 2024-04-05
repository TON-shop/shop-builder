import { useState } from "react";
import Icon from "../common/Icon";
import { twMerge } from "tailwind-merge";

function A() {
  const heroItems = [
    "key",
    "person",
    "github",
    "bookmark",
    "ssidChart",
    "paid",
  ] as const;

  return (
    <section className="overflow-x-scroll">
      <div
        className="flex justify-between"
        style={{ width: `${(heroItems.length / 4) * 100}%` }}
      >
        {heroItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-primary/80 bg-primary/5 flex flex-col items-center py-4 rounded-3xl"
            style={{ width: `${23}vw` }}
          >
            <Icon icon={item} className="text-[3rem] text-front" />
            <p className="capitalize">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function B() {
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

function C() {
  const items = ["Clothes", "Jeans", "T-Shirt", "Tye-Dye", "Skirts"];
  const [selected, setSelected] = useState(0)
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={twMerge("", selected ? "bg-secondary" : "")}>{item}</div>
      ))}
    </div>
  );
}

const Carousel = { A, B, C };

export default Carousel;
