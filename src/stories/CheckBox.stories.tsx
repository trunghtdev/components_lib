import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from '../components/CheckBox'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};