import React from 'react';
import { Skeleton } from "../component/Skeleton";

export default {
  title: 'Skeleton',
  component: Skeleton,
  args: {
    width: 200,
    height: 200,
    bgColor: '#e2e5e7',
    variant: 'rectangular'
  },
  argTypes: {
    variant: {
      options: ['rounded', 'rectangular', 'circular'],
      control: { type: 'select' }
    }
  }
}

export const Template = (args) => (<Skeleton {...args} />);
