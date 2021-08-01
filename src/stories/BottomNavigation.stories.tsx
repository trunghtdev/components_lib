import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BottomNavigation } from '../components/BottomNavigation'
import BookmarkIcon from './assets/bottomNavigation/bookmark'
import CameraIcon from './assets/bottomNavigation/camera'
import CellPhoneIcon from './assets/bottomNavigation/cellphone'
import HomeIcon from './assets/bottomNavigation/home'
import TrashIcon from './assets/bottomNavigation/trash'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/BottomNavigation',
  component: BottomNavigation,
} as ComponentMeta<typeof BottomNavigation>;;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof BottomNavigation> = (args) => <BottomNavigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      text: "Title 1",
      icon: <HomeIcon />,
      id: 'title_1'
    },
    {
      text: "Title 2",
      icon: <CellPhoneIcon />,
      id: 'title_2'
    },
    {
      text: "Title 3",
      icon: <CameraIcon />,
      id: 'title_3'
    },
    {
      text: "Title 4",
      icon: <TrashIcon />,
      id: 'title_4'
    },
    {
      text: "Title 5",
      icon: <BookmarkIcon />,
      id: 'title_5'
    }
  ]
};