import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/style.css'
import { CardItem } from '../CardItem';

export const CardList = ({ cards , col}) => (
  <div className="list-card" data-col={col}>
    {
      cards.map((card, index)=>(
        <CardItem card={card} key={index}/>
      ))
    }
  </div>
);


CardList.propTypes = {
  cards: PropTypes.array,
  col: PropTypes.number

};
