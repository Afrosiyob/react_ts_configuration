import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import AntButton from "../AntButton";

describe("Test for Component 'AntButton'", () => {
  it("should render", () => {
    render(<AntButton> Button </AntButton>);

    const component = screen.getByTestId("ANT_BUTTON_ID");

    expect(component).toBeInTheDocument();
  });

  it("should work props", () => {
    const testRenderer = renderer.create(
      <AntButton size="middle" disabled={true}>
        Button
      </AntButton>
    );
    const testInstance = testRenderer.root;

    expect(testInstance.props.size).toBe("middle");
    expect(testInstance.props.disabled).toBe(true);
  });

  // it("should work action", () => {
  //   const onClick = jest.fn();

  //   render(<AntButton> Button </AntButton>);
  //   const component = screen.getByTestId("ANT_BUTTON_ID");

  //   fireEvent.click(component);

  //   expect(onClick).toHaveBeenCalled();
  // });
});

describe("Snapshot for component 'AntButton'", () => {
  it("should matches DOM", () => {
    const tree = renderer.create(<AntButton> Button </AntButton>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
