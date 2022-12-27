/* eslint-disable @typescript-eslint/no-namespace */

export declare namespace IApi {
  export namespace IList {
    export interface IResponse {
      content: IProduct[];
    }
    export interface IParams {
      page?: number;
      perPage?: number;
      sort?: {
        name?: string;
        direction?: "ASC" | "DESC";
      };
      filter?: IFilter[];
    }

    export interface IFilter {
      key: string;
      operation: ">" | ">=" | "<" | "<=" | "=" | "!=";
      value: string | number | string[];
    }
  }

  export namespace ISingle {
    export type IResponse = IProduct;
  }

  export interface IProduct {
    _id: string;
    user: string;
    title: string;
    price: number;
    description: string;
    productId: string;
    createdAt: Date | null;
    updatedAt: Date | null;
  }
}

export declare namespace IEntity {
  export interface IProduct {
    _id: string;
    user: string;
    title: string;
    price: number;
    description: string;
    productId: string;
    createdAt: Date | null;
    updatedAt: Date | null;
  }

  export interface IMeta {
    totalPages: number;
    totalItems: number;
    current: number;
    perPage: number;
  }
}

export declare namespace IQuery {
  export interface IList {
    items: IEntity.IProduct[];
    meta?: IEntity.IMeta;
  }

  export interface ISingle {
    item: IEntity.IProduct;
  }

  export interface IDelete {
    id: string;
  }
}

export declare namespace IForm {
  export interface ICreate {
    title: string;
    price: number;
    description: string;
  }

  export interface IUpdate {
    title: string;
    price: number;
    description: string;
  }
}
