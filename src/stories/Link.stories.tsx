import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '../components/Link'
import LinkIcon from './assets/Link'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Link',
  component: Link,
} as ComponentMeta<typeof Link>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href:'/html',
  disabled: false,
  icon: <LinkIcon />,
  text: 'Internal Link'
};