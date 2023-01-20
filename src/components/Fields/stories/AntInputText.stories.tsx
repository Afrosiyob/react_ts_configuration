/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

import { withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AntInput from "./components/AntInput";

export default {
  title: "Components/Input",
  component: AntInput,
  decorators: [withKnobs],
  // argTypes: { onClick: { action: "clicked" } },
  // parameters: {
  //   actions: {
  //     argTypesRegex: "^on.*",
  //     handles: ["onChange", "^on.*"],
  //   },
  // },
} as ComponentMeta<typeof AntInput>;

const Template: ComponentStory<typeof AntInput> = (args) => (
  <AntInput {...args} />
);

export const Text = Template.bind({});
