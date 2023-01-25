import { renderHook } from "@testing-library/react";

import useSetKey from "../useSetKey";

describe("Test for   Hook 'useSetKey'", () => {
  it("should return props", () => {
    const defaultProps = [
      {
        name: "Leo",
        age: 14,
      },
      {
        name: "Doe",
        age: 28,
      },
    ];

    const returnProps = [
      {
        key: 0,
        name: "Leo",
        age: 14,
      },
      {
        key: 1,
        name: "Doe",
        age: 28,
      },
    ];

    const { result } = renderHook((props) => useSetKey(props), {
      initialProps: [...defaultProps],
    });

    expect(result.current).toEqual(returnProps);
  });
});
