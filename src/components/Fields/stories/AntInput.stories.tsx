/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

import { ComponentMeta, ComponentStory } from "@storybook/react";

import AntInput from "./components/AntInput";

export default {
  title: "Components/Input",
  component: AntInput,
} as ComponentMeta<typeof AntInput>;

const Template: ComponentStory<typeof AntInput> = (args) => (
  <AntInput {...args} />
);

export const Text = Template.bind({});
