import { Layout, Store } from "./types";

export const exampleHomeLayout: Layout = [
  { name: "Example", variety: "A", props: {} },
  { name: "Example", variety: "B", props: {} },
  { name: "Navbar", variety: "A", props: {} },
  { name: "Navbar", variety: "B", props: { name: "Spandan" } },
];

export const exampleShopLayout: Layout = [
  { name: "Navbar", variety: "B", props: {} },
];

export const exampleStore: Store = {
  id: "example",
  name: "Example Store",
  description: "Example Store",
  icon: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
  routes: {
    home: { layout: exampleHomeLayout },
    shop: { title: "Example products", layout: exampleShopLayout },
  },
};

export const dummyStores: Array<Store> = [exampleStore];
