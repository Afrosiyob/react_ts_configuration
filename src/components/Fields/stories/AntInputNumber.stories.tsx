/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AntInputNumber from "./components/AntInputNumber";

export default {
  title: "Components/Input",
  component: AntInputNumber,
} as ComponentMeta<typeof AntInputNumber>;

const Template: ComponentStory<typeof AntInputNumber> = (args) => (
  <AntInputNumber {...args} />
);

export const Number = Template.bind({});
