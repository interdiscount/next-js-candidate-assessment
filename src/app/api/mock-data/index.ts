import type { Product, StockInfo, Store } from "~/types/api";

export const stores: Array<Store> = [
  { id: "store-1", name: "Bern Waisenhausplatz", city: "Bern" },
  { id: "store-2", name: "Bern Bahnhof", city: "Bern" },
  { id: "store-3", name: "Bern Wankdorf", city: "Bern" },
  { id: "store-4", name: "Ostermundigen", city: "Ostermundigen" },
  { id: "store-5", name: "Zürich Sihlcity", city: "Zürich" },
  { id: "store-6", name: "Zürich Bahnhofstrasse", city: "Zürich" },
  { id: "store-7", name: "Genève Centre", city: "Genève" },
];

export const products: Array<Product> = [
  {
    id: "prod-1",
    name: 'SuperGamer Laptop 15"',
    description: "The ultimate gaming laptop for enthusiasts.",
    price: 2500.5,
  },
  {
    id: "prod-2",
    name: 'UltraThin Notebook 13"',
    description: "Lightweight and powerful for professionals on the go.",
    price: 1800.99,
  },
  {
    id: "prod-3",
    name: '4K Pro Display 27"',
    description: "Stunning visuals for creative work.",
    price: 1200,
  },
];

export const stockByProduct: Record<string, Array<StockInfo>> = {
  "prod-1": [
    { storeId: "store-1", quantity: 15 },
    { storeId: "store-2", quantity: 2 },
    { storeId: "store-4", quantity: 8 },
    { storeId: "store-5", quantity: 25 },
    { storeId: "store-7", quantity: 3 },
  ],
  "prod-2": [
    { storeId: "store-1", quantity: 12 },
    { storeId: "store-3", quantity: 1 },
    { storeId: "store-5", quantity: 5 },
    { storeId: "store-7", quantity: 20 },
  ],
  "prod-3": [
    { storeId: "store-1", quantity: 1 },
    { storeId: "store-2", quantity: 0 },
    { storeId: "store-4", quantity: 30 },
    { storeId: "store-6", quantity: 12 },
  ],
};
