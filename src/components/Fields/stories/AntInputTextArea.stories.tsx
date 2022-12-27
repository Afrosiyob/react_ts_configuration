/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

import { ComponentMeta, ComponentStory } from "@storybook/react";

import AntInputTextArea from "./components/AntInputTextArea";

export default {
  title: "Components/Input",
  component: AntInputTextArea,
} as ComponentMeta<typeof AntInputTextArea>;

const Template: ComponentStory<typeof AntInputTextArea> = (args) => (
  <AntInputTextArea {...args} />
);

export const TextArea = Template.bind({});
