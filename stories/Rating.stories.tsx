import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from '../src/Rating'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  count: 5
};