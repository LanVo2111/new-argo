import React from 'react';
import Tag from '../component/Tag';

export default {
  title: 'Tag',
  component: Tag,
  args: {
    tagName: 'default',
    type: 'default',
    listTag: ['Tag1', 'Tag2']

  },
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'processing', 'default', 'remove'],
      control: { type: 'select' }
    },

  }
};

export const Template = (args) => (<Tag {...args} />);
