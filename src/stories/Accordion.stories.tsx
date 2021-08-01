import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from '../components/Accordion'
import { Text } from '../components/Text'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Accordion",
  children: (
    <Text
      text="Here’s some example text that may answer an FAQ or give the user some helpful advice."
    />
  )
};