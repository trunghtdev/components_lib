import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StepperV2 } from '../src/StepperV2'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/StepperV2',
  component: StepperV2,
} as ComponentMeta<typeof StepperV2>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof StepperV2> = (args) => <StepperV2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};