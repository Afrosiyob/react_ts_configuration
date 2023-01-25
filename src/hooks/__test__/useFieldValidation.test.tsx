import { renderHook } from "@testing-library/react-hooks";
import useFieldValidation from "hooks/useFieldValidation";

describe("Test for Hook 'useFieldValidation'", () => {
  it("check types of return props", () => {
    const defaultProps = {
      fieldState: {
        isTouched: true,
        error: {
          message: "error message",
        },
      },
      submitCount: 0,
    };

    const { result } = renderHook((props) => useFieldValidation(props), {
      initialProps: defaultProps,
    });

    expect(typeof result.current.hasFeedback).toBe("boolean");
    expect(typeof result.current.validationMessage).toBe("string");
    expect(typeof result.current.validationStatus).toBe("string");
  });

  it("check values of return props", () => {
    const defaultProps = {
      fieldState: {
        isTouched: true,
        error: {
          message: "error message",
        },
      },
      submitCount: 0,
    };

    const { result } = renderHook((props) => useFieldValidation(props), {
      initialProps: defaultProps,
    });

    expect(result.current.hasFeedback).toBe(true);
    expect(result.current.validationMessage).toBe("error message");
    expect(result.current.validationStatus).toBe("error");
  });
});
