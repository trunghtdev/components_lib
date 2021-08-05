import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '../src/Typography'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Text"
};