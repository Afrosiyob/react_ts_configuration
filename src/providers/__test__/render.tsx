/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import RootProvider from "providers/RootProvider";

export const elementRender = (
  ui: ReactElement<any>,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => render(ui, { wrapper: RootProvider, ...options });

export * from "@testing-library/react";
