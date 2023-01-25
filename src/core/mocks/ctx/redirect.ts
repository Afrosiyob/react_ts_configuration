import { compose, context } from "msw";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function redirectWithRes(destination: string, statusCode: number): any {
  return (res: any) => {
    res.status = statusCode;
    res.headers.set("Location", destination);
    return res;
  };
}

export function redirect(destination: string, statusCode: number): any {
  return compose(
    context.status(statusCode),
    context.set("Location", destination)
  );
}
