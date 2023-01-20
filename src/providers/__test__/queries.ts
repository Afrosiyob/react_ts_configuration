/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  buildQueries,
  Matcher,
  MatcherOptions,
  queryHelpers,
} from "@testing-library/react";

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByDataCy = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions | undefined
) => queryHelpers.queryAllByAttribute("data-cy", container, id, options);

const getMultipleError = (c: unknown, dataCyValue: unknown) =>
  `Found multiple elements with the data-cy attribute of: ${dataCyValue}`;
const getMissingError = (c: unknown, dataCyValue: unknown) =>
  `Unable to find an element with the data-cy attribute of: ${dataCyValue}`;

const [
  queryByDataCy,
  getAllByDataCy,
  getByDataCy,
  findAllByDataCy,
  findByDataCy,
] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError);

export {
  findAllByDataCy,
  findByDataCy,
  getAllByDataCy,
  getByDataCy,
  queryAllByDataCy,
  queryByDataCy,
};
