import { ComponentName, ComponentVariety } from "./components";

export interface Element {
  name: ComponentName;
  type: ComponentVariety<ComponentName>;
  props: object;
}

export type Layout = Array<Element>;

export interface Route {
  title?: string;
  description?: string;
  layout: Layout;
}

export interface Shop {
  id: number;
  name: string;
  icon: string;
  description: string;
  routes: Record<string, Route>;
}
