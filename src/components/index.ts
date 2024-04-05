import Example from "./Example";
import Navbar from "./Navbar";

const AllComponents = { Example, Navbar };

export default AllComponents;

export type ComponentName = keyof typeof AllComponents;
export type ComponentVariety<T extends ComponentName> =
  keyof (typeof AllComponents)[T];