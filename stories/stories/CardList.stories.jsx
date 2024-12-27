import React from 'react';
import { CardList } from '../component/CardList';

const data = [
  {
    id: 1,
    category: 'SUV',
    title: '2022 Kia Suv',
    imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
    price: '23805',
    btnText: 'See Details',
    description: 'The 2025 Honda Pilot is one of our favorite midsize SUVs because it performs its duties so well.',
    expert: '4.7',
    consumer: '4.2',
    mpg: ''
  },
  {
    id: 2,
    category: 'SUV',
    title: '2023 Kia Suv',
    imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
    price: '23805',
    btnText: 'See Details',
    description: 'The 2025 Honda Pilot is one of our favorite midsize SUVs because it performs its duties so well.',
    expert: '4.5',
    consumer: '',
    mpg: 32
  },
  {
    id: 3,
    category: 'SUV',
    title: '2024 Kia Suv',
    imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
    price: '23805',
    btnText: 'See Details',
    description: 'The 2025 Honda Pilot is one of our favorite midsize SUVs because it performs its duties so well.',
    expert: '',
    consumer: '4.8',
    mpg: 35
  }
]
export default {
  title: 'CardList',
  component: CardList,
  args: {
    cards: data,
    col: 3
  },
  argTypes: {
    col:{
      name: 'Number Col'
    }
  },
};

export const Template = (args) => (<CardList {...args} />);
