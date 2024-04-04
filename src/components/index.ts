import Example from "./Example";

const AllComponents = { Example };

export default AllComponents;

export type ComponentName = keyof typeof AllComponents;
export type ComponentVariety<T extends ComponentName> =
  keyof (typeof AllComponents)[T];
