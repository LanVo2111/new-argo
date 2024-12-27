import React from 'react';
import { Button } from '../component/Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    isPrimary: true,
    label: 'Button',
    size: 'medium',
    backgroundColor: '#ec9031',
    color: '#fff',
    isDisabled: false
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'select' }
    }
  },
};

export const Template = (args) => (<Button {...args} />);

export const Danger = (args) => (<Button {...args} />)
