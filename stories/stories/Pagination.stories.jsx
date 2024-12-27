import React from 'react';
import { Pagination } from "../component/Pagination";

export default {
  title:' Pagination',
  component: Pagination,
  args: {
    totalPages: 10,
    color: 'normal',
    currentPage: 1,
  },
  argTypes: {
    color: {
      options: ['normal', 'primary', 'secondary'],
      control: { type: 'select' },
    },
  }
}

export const Template = (args) => (<Pagination {...args} />);
