import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '../src/Avatar'
import avatarImg from './assets/Avatar.svg'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Text",
  image: {
    src: avatarImg
  }
};