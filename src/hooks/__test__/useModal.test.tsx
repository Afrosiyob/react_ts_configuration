import { act, renderHook } from "@testing-library/react-hooks";
import useModal from "hooks/useModal";

describe("Test for Hook 'useModal'", () => {
  it("check types of return props", () => {
    const { result } = renderHook(() => useModal());

    expect(typeof result.current.isVisible).toBe("boolean");
    expect(typeof result.current.itemId).toBe("string");
    expect(typeof result.current.showModal).toBe("function");
    expect(typeof result.current.handleOk).toBe("function");
    expect(typeof result.current.handleCancel).toBe("function");
    expect(typeof result.current.handleItemId).toBe("function");
  });

  it("check action 'showModal' of return props", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.showModal();
    });

    expect(result.current.isVisible).toBe(true);
  });

  it("check action 'handleOk' of return props", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.handleOk();
    });

    expect(result.current.isVisible).toBe(false);
  });

  it("check action 'handleCancel' of return props", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.handleCancel();
    });

    expect(result.current.isVisible).toBe(false);
  });

  it("check action 'handleItemId' with string of return props", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.handleItemId("abs123");
    });

    expect(typeof result.current.itemId).toBe("string");
    expect(result.current.itemId).toBe("abs123");
  });

  it("check action 'handleItemId' with number of return props", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.handleItemId(123);
    });

    expect(typeof result.current.itemId).toBe("number");
    expect(result.current.itemId).toBe(123);
  });
});
