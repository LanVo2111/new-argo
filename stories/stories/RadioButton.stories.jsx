import React from 'react';
import { RadioButton } from '../component/RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
  args: {
    name: 'gender',
    isDisabled: false,
    isChecked: false,
    label: 'Femail',
    hasBorder: false,
  },
  argTypes: {
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    isChecked: {
      options: [true, false],
      control: { type: 'radio' },
    },
    hasBorder: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export const Template = (args) => (<RadioButton {...args} />);
