/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import AntTable from "../AntTable";

describe("Test for component 'AntTable'", () => {
  beforeAll(() => {
    global.matchMedia =
      global.matchMedia ||
      function () {
        return {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      };
  });

  it("should render", () => {
    const columns = [
      {
        key: 0,
        dataIndex: "name",
        title: "Name",
      },
      {
        key: 1,
        dataIndex: "age",
        title: "Age",
      },
      {
        key: 2,
        dataIndex: "address",
        title: "Address",
      },
    ];

    const data = [
      {
        name: "Leo",
        age: 19,
        address: "London",
      },
      {
        name: "Doe",
        age: 25,
        address: "America",
      },
    ];

    render(<AntTable columns={columns} data={data} loading={false} />);

    const component = screen.getByTestId("ANT_TABLE_ID");

    expect(component).toBeInTheDocument();
  });

  it("should empty", () => {
    const columns = [
      {
        key: 0,
        dataIndex: "name",
        title: "Name",
      },
      {
        key: 1,
        dataIndex: "age",
        title: "Age",
      },
      {
        key: 2,
        dataIndex: "address",
        title: "Address",
      },
    ];

    render(<AntTable columns={columns} data={[]} loading={false} />);

    const component = screen.getByTestId("ANT_TABLE_ID");

    expect(component).toHaveTextContent("NameAgeAddress");
  });
});

describe("Snapshot for component 'AntTable'", () => {
  it("should match DOM", () => {
    const columns = [
      {
        key: 0,
        dataIndex: "name",
        title: "Name",
      },
      {
        key: 1,
        dataIndex: "age",
        title: "Age",
      },
      {
        key: 2,
        dataIndex: "address",
        title: "Address",
      },
    ];

    const data = [
      {
        name: "Leo",
        age: 19,
        address: "London",
      },
      {
        name: "Doe",
        age: 25,
        address: "America",
      },
    ];

    const tree = renderer.create(
      <AntTable columns={columns} data={[]} loading={false} />
    );

    expect(tree).toMatchSnapshot();
  });
});
