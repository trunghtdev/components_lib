import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../src/Text'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Text"
};