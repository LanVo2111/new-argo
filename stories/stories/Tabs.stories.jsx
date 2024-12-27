import React from 'react';
import { Tabs } from '../component/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  args: {
    tabListTitle: ['Title 1', 'Title 2', 'Title 3', 'Title 4'],
    type: 'normal',
    position: 'center'
  },
  argTypes: {
    type: {
      options: ['normal', 'closable', 'tabInline'],
      control: { type: 'select' }
    },
    position: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' }
    }
  }
};

export const Template = (args) => (<Tabs {...args} />);
