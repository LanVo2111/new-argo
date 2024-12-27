import React from 'react';
import renderer from 'react-test-renderer';
import { CardItem } from './index';

const data = {
  id: 1,
  category: 'SUV',
  title: '2022 Kia Suv',
  imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
  price: 23805,
  btnText: 'See Details',
  description: 'aaaa'
}

it('test props', () => {
  const component = renderer.create(
    <CardItem card={data} />
  ).toJSON()

  expect(component).toMatchSnapshot();
});
