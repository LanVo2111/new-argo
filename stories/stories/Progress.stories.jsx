import React from 'react';
import { Progress } from '../component/Progress';

export default {
  title: 'Progress',
  component: Progress,
  args: {
    percentValue: 30,
    showInfo: true,
    status: 'active',
    type: 'normal',
    percentPosition: 'end',
    setSize: false,
    size: {
      width: 200,
      height: 30,
    },
    numberStep : 4
  },
  argTypes: {
    showInfo: {
      options: [true, false],
      control: { type: 'radio' },
    },
    status: {
      options: ['normal', 'active', 'exception', 'success'],
      control: { type: 'select' },
    },
    type: {
      options: ['normal', 'step'],
      control: { type: 'select' }
    },
    percentPosition: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' }
    },
    setSize: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export const Template = (args) => (<Progress {...args} />);
