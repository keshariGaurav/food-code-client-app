export interface MenuItems {
  id: ID;
  name: string;
  price: number;
  description: string;
  category: string;
  tag: string;
  categoryId: string;
  _id: string;
  visible?: boolean;
}
export interface Category {
  id: ID;
  name: string;
  visible?: boolean;
  descrption?: string;
}
export interface MenuItemByCategory {
  id: ID;
  category: Category;
  visible?: boolean;
  menus: MenuItems[];
}

export interface AddOnItemDetail {
  name: string;
  price: number;
  _id: string;
}

export interface AddOnItem {
  name: string;
  required: boolean;
  multiSelect: boolean;
  limit: boolean;
  limitSize: number;
  items: AddOnItemDetail[];
  _id: string;
}

export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  tag: string;
  image: string;
  available: boolean;
  categoryId: string;
  visible?: boolean;
  addOnItems: AddOnItem[];
  __v: number;
}

type MenuPopupState = {
  menuId: string;
  categoryId: string;
  visible: boolean;
  data: Partial<MenuItem>;
  selectedItems: {
    [key: string]: string[];
  };
  selectedItemsAmount: {
    [key: string]: number;
  };
  amount: number;
  totalAmount: number;
  quantity: number;
};
