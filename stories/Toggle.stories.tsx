import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from '../src/Toggle'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};