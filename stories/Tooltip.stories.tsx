import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from '../src/Tooltip'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <div
      style={{
        marginTop: 300,
        marginLeft: 200
      }}
    >
      <span>component</span>
      <br />
      <span>component</span>
      <br />
      <span>component</span>
      <br />
      <span>component</span>
    </div>
  </Tooltip>
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Here is some helpful explainer text to assist the user in understanding how a certain feature works."
};