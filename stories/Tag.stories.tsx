import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from '../src/Tag'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Text"
};