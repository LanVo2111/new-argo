import React from 'react';
import Accordion from '../component/Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  args: {
    listData: [
      {
        title: 'Section 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Section 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Section 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    ],
    hasBg: true
  },
  argTypes: {
    hasBg: {
      options: [true, false],
      control: { type: 'select' },
    },
    type: {
      options: ['normal', 'psub'],
      control: { type: 'select' }
    }
  },
};

export const Template = (args) => (<Accordion {...args} />);
