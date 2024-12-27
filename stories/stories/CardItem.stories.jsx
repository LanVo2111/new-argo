import React from 'react';
import { CardItem } from '../component/CardItem';

const data =
  {
    id: 1,
    category: 'SUV',
    title: '2025 Honda CR-V',
    imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
    price: 31450,
    btnText: 'See Details',
    description: 'The 2025 Honda Pilot is one of our favorite midsize SUVs because it performs its duties so well.',
    expert: '4.7',
    consumer: '4.2',
    mpg: 30
  }

export default {
  title: 'CardItem',
  component: CardItem,
  args: {
    card: data
  },
  argTypes: {
    card:{
      name: 'Data'
    }
  }
};

export const Template = (args) => (<CardItem {...args} />);
