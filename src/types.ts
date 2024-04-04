export interface Route {
  title?: string;
  description?: string;
}

export interface Shop {
  id: number;
  name: string;
  icon: string;
  description: string;
  routes: Record<string, Route>;
}
