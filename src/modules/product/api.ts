import { http } from "core/services/api";

import * as Types from "./types";

export const List = async (): Promise<Types.IEntity.IProduct[]> =>
  await http.get("/api/v1/product");

export const Single = async ({
  id,
}: {
  id: string | number;
}): Promise<Types.IEntity.IProduct> => await http.get(`/api/v1/product/${id}`);

export const Create = async ({
  values,
}: {
  values: Types.IForm.ICreate;
}): Promise<Types.IApi.ISingle.IResponse> =>
  await http.post("/api/v1/product", {
    title: values.title,
    price: values.price,
    description: values.description,
  });

export const Update = async ({
  id,
  values,
}: {
  id: string | number;
  values: Types.IForm.IUpdate;
}): Promise<Types.IApi.ISingle.IResponse> =>
  await http.put(`/api/v1/product/${id}`, {
    title: values.title,
    price: values.price,
    description: values.description,
  });

export const Delete = async ({
  id,
}: {
  id: string | number;
}): Promise<Types.IEntity.IProduct> =>
  await http.delete(`/api/v1/product/${id}`);

export const SyncList = async (): Promise<Types.IEntity.IProduct[]> =>
  await http.get("/api/v1/product");

export const SyncSingle = async ({
  id,
}: {
  id: string | number;
}): Promise<Types.IEntity.IProduct> => await http.get(`/api/v1/product/${id}`);
