import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Token } from '../src/Token'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Token',
  component: Token,
} as ComponentMeta<typeof Token>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Token> = (args) => <Token {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Text'
};