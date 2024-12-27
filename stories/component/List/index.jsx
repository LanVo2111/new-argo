import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/style.css'

export const List = ({ className, data , column}) => {
  
  return (
    <ul className={`list ${className ?? className}`} data-col={column}>
      {data.map((item, index) => (
        <li key={index} className='item'>
          <a>
            <img src={item.image} alt={item.name} width={30} height={30} />
            <p className='item-name'>{item.name}</p>
          </a>
        </li>
      ))}
    </ul>
  )
};

List.propTypes = {
  column: PropTypes.string
};
