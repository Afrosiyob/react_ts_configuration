import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Label from "../Label";

describe("Test for Component 'AntLabel'", () => {
  it("should render", () => {
    render(
      <Label required={false} error={false} title="Label">
        <div> children </div>
      </Label>
    );

    const component = screen.getByTestId("ANT_LABEL_ID");

    expect(component).toBeInTheDocument();
  });

  it("should work props", () => {
    const testRenderer = renderer.create(
      <Label required={false} error={false} title="Label">
        <div> children </div>
      </Label>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.props.required).toBe(false);
    expect(testInstance.props.error).toBe(false);
    expect(testInstance.props.title).toBe("Label");
  });
});

describe("Snapshot for component 'AntLabel'", () => {
  it("should match DOM", () => {
    const tree = renderer.create(
      <Label required={false} error={false} title="Label">
        <div> children </div>
      </Label>
    );

    expect(tree).toMatchSnapshot();
  });
});
