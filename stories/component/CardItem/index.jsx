import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/style.css'
import { FaStar } from 'react-icons/fa';

export const CardItem = ({ card }) => (
  <div className='card-item'>
    <a href='#'>
      <div className='category'>
        {card.category}
      </div>
      <div className='title'>
        <h3>{card.title}</h3>
      </div>
      <div className='image'>
        <img src={card.imageSrc} alt='image' />
      </div>
      <div className='content'>
        <span className='price'>
          ${card.price}
        </span>
        <span className='des'>Starting Price</span>
      </div>
      <div className='review'>
        <div className='review_item'>
          {
            card.expert > 0 ?
              <>
                <span className='point'>{card.expert}</span>
                <FaStar color='#e5e51f' />
                <span>Expert</span>
              </> :
              <>
                <span>Expert</span>
                <span className='none-value'>(N/A)</span>
              </>
          }
        </div>
        <div className='review_item'>
          {
            card.consumer > 0 ?
              <>
                <span className='point'>{card.consumer}</span>
                <FaStar color='#e5e51f' />
                <span>Consumer</span>
              </>
              :
              <>
                <span>Consumer</span>
                <span className='none-value'>(N/A)</span>
              </>
          }
        </div>
      </div>
      <div className='cfe'>
        {card.mpg > 0 ? <span>{card.mpg} MPG</span> : <span>N/A</span>}
        <span>Combined Fuel Economy</span>
      </div>
      <p className='description'>
        {card.description}
      </p>
      <button type='button' className='btn-detail'>See Details</button>
    </a>
  </div>
);


CardItem.propTypes = {
  card: PropTypes.object
}
