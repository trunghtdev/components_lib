import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stepper } from '../src/Stepper'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      id: 'stepper_1',
      name: 'Step 1'
    },
    {
      id: 'stepper_2',
      name: 'Step 2'
    },
    {
      id: 'stepper_3',
      name: 'Step 3'
    }
  ]
};