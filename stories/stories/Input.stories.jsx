import React from 'react';
import { Input } from '../component/Input';

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Please input value here',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    disabled: false

  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'select' },
    },
    onChange: {},
    
  }
};

export const Template = (args) => (<Input {...args} />);
