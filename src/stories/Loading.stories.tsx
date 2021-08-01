import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loading } from '../components/Loading'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progress: 50
};