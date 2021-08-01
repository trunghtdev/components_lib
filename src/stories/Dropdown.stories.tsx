import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '../components/Dropdown'
import { Text } from '../components/Text'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  prefix:'text',
  prefixKey: 'id',
  dataSource: [
    {
      text: "Active 1",
      id: "active_1"
    },
    {
      text: "Inactive 2",
      id: "active_2"
    },
    {
      text: "Inactive 3",
      id: "active_3"
    },
    {
      text: "Inactive 4",
      id: "active_4"
    },
    {
      text: "Inactive 5",
      id: "active_5"
    }
  ],
  renderItem: (item: { text: string }) => {
    return (
      <Text type='link' size='small' text={item.text} />
    )
  }
};