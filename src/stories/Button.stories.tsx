import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Button"
};