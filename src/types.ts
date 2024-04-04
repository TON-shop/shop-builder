export interface Element {
  name: string;
  type: string;
}

export interface Route {
  title?: string;
  description?: string;
  elements: Array<Element>;
}

export interface Shop {
  id: number;
  name: string;
  icon: string;
  description: string;
  routes: Record<string, Route>;
}
