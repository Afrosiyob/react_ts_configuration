/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AntTable from "../AntTable";

export default {
  title: "Components/Table",
  component: AntTable,
} as ComponentMeta<typeof AntTable>;

const Template: ComponentStory<typeof AntTable> = (args) => (
  <AntTable {...args} />
);

export const Simple = Template.bind({});

Simple.args = {
  columns: [
    {
      key: 1,
      title: "Name",
      dataIndex: "name",
    },
    {
      key: 2,
      title: "Age",
      dataIndex: "age",
    },
    {
      key: 3,
      title: "Action",
      render: (): JSX.Element => <div>Edit | Delete</div>,
    },
  ],
  data: [
    {
      name: "Doe",
      age: 24,
    },
    {
      name: "Hans",
      age: 12,
    },
    {
      name: "Lui",
      age: 45,
    },
  ],
};
