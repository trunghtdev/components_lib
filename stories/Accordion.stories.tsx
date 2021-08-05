import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from '../src/Accordion'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <Accordion.Header>
      Initial accordion state
    </Accordion.Header>
    <Accordion.Body>
      Here’s some example text that may answer an FAQ or give the user some helpful advice.
    </Accordion.Body>
  </Accordion>
);

export const Primary = Template.bind({});
Primary.args = {

};