import React from 'react';
import { List } from "../component/List";
import car1 from '../assets/car-1.png'
import car2 from '../assets/car-2.png'
import car3 from '../assets/car-3.png'
import car4 from '../assets/car-4.jpg'

export default {
  title:' List',
  component: List,
  args: {
    data : [
      {
        id: 1,
        image: car1,
        name: 'Acura'
      },
      {
        id: 2,
        image: car2,
        name: 'Ford'
      },
      {
        id: 3,
        image: car3,
        name: 'Lotus'
      },
      {
        id: 4,
        image: car4,
        name: 'Rolls-Royce'
      }
    ],
    column: "1",
  },
  argTypes: {
    column: {
      options: ["1", "2", "3", "4", "5"],
      control: { type: 'select' }
    },
  }
}

export const Template = (args) => (<List {...args} />);
