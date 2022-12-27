export type ConvertToOptional<T> = {
  [K in keyof T]?: T[K];
};

export type ConvertToReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
