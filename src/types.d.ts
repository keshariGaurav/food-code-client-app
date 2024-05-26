export interface MenuItems {
  id: ID;
  name: string;
  price: number;
  description: string;
  category: string;
  tag: string;
}
export interface Category {
  id: ID;
  name: string;
  descrption?: string;
}
export interface MenuItemByCategory {
  id: ID;
  category: Category;
  menus: MenuItems[];
}
