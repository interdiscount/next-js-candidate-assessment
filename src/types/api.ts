import { STOCK_STATUS } from "~/constants";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Store {
  id: string;
  name: string;
  city: string;
}

export interface StockInfo {
  storeId: string;
  quantity: number;
}

export interface StoreWithStock extends Store {
  quantity: number;
  status: STOCK_STATUS;
}
