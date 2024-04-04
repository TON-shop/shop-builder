import { ComponentName, ComponentVariety } from "./components";

export interface Element {
  name: ComponentName;
  variety: ComponentVariety<ComponentName>;
  props: any;
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
