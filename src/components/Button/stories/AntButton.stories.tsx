/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AntButton from "../AntButton";

export default {
  title: "Components/Button",
  component: AntButton,
} as ComponentMeta<typeof AntButton>;

const Template: ComponentStory<typeof AntButton> = (args) => (
  <AntButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  children: "Button",
};

export const Dashed = Template.bind({});

Dashed.args = {
  type: "dashed",
  children: "Button",
};

export const Text = Template.bind({});

Text.args = {
  type: "text",
  children: "Button",
};

export const Link = Template.bind({});

Dashed.args = {
  href: "#!",
  type: "link",
  children: "Button",
};

export const Small = Template.bind({});

Small.args = {
  type: "primary",
  children: "Button",
  size: "small",
};

export const Large = Template.bind({});

Large.args = {
  type: "primary",
  children: "Button",
  size: "large",
};

export const Middle = Template.bind({});

Middle.args = {
  type: "primary",
  children: "Button",
  size: "middle",
};
