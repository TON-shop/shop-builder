import React from "react";

export default function A() {
  return (
    <header className="fixed top-0 left-0 w-full flex flex-col gap-y-6">
      <h1 className="text-[2rem] pt-2 text-center tracking-wider font-bold text-primary">
        Shop Name
      </h1>

      <div className="mx-6 rounded-2xl overflow-hidden">
        <img src="https://png.pngtree.com/template/20220330/ourlarge/pngtree-orange-simple-and-atmospheric-women-s-clothing-autumn-and-winter-fashion-image_906464.jpg" />
      </div>

      <div className="mx-6 rounded-2xl overflow-hidden">
        <img src="https://i.pinimg.com/550x/6b/a7/20/6ba720097ead63341045769f95f14ea2.jpg" />
      </div>
    </header>
  );
}
