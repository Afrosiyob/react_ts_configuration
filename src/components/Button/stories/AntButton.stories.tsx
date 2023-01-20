/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AntButton from "../AntButton";

export default {
  title: "Components/Button",
  component: AntButton,
  decorators: [withKnobs],
} as ComponentMeta<typeof AntButton>;

const Template: ComponentStory<typeof AntButton> = (args) => (
  <AntButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  children: "Button",
  onClick: action("Primary button clicked"),
};

export const Dashed = Template.bind({});

Dashed.args = {
  type: "dashed",
  children: "Button",
  onClick: action("Dashed button clicked"),
};

export const Text = Template.bind({});

Text.args = {
  type: "text",
  children: "Button",
  onClick: action("Text button clicked"),
};

export const Link = Template.bind({});

Dashed.args = {
  href: "#!",
  type: "link",
  children: "Button",
  onClick: action("Link button clicked"),
};

export const Small = Template.bind({});

Small.args = {
  type: "primary",
  children: "Button",
  size: "small",
  onClick: action("Small button clicked"),
};

export const Large = Template.bind({});

Large.args = {
  type: "primary",
  children: "Button",
  size: "large",
  onClick: action("Large button clicked"),
};

export const Middle = Template.bind({});

Middle.args = {
  type: "primary",
  children: "Button",
  size: "middle",
  onClick: action("Middle button clicked"),
};
