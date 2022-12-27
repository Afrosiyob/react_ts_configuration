import get from "lodash/get";
import has from "lodash/has";

import * as Types from "./types";

export const Product = (item?: unknown): Types.IEntity.IProduct => ({
  _id: get(item, "_id", ""),
  user: get(item, "user", ""),
  title: get(item, "title", ""),
  price: get(item, "price", 0),
  description: get(item, "description", ""),
  productId: get(item, "productId", ""),
  createdAt: get(item, "createdAt", null),
  updatedAt: get(item, "updatedAt", null),
});

export const Meta = (item?: unknown): Types.IEntity.IMeta => ({
  totalPages: get(item, "total_pages", 0),
  totalItems: get(item, "total_elements", 0),
  current: has(item, "number") ? get(item, "number", 0) + 1 : 1,
  perPage: get(item, "size", 20),
});
