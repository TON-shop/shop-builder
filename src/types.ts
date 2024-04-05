import { ComponentName, ComponentVariety } from "./components";

export interface Element {
  name: ComponentName;
  variety: ComponentVariety<ComponentName>;
  props?: any;
}

export type Layout = Array<Element>;

export interface RouteType {
  title?: string;
  description?: string;
  layout: Layout;
}

export interface Store {
  id: string;
  name: string;
  icon: string;
  description: string;
  routes: Record<string, RouteType>;
}

export type UnionToArray<U> = U extends any ? U[] : never;

export type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;

export type UnionToTuple<T> = UnionToIntersection<
  T extends any ? (t: T) => T : never
> extends (_: any) => infer W
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : [];

export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};
