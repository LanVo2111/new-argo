import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/style.css'

export const Pagination = ({ totalPages, color, currentPage }) => (
  <ul className={`pagination ${color}`}>
    {
      Array.from({ length: totalPages }).map((item, index) => {
        return (
          <li className={currentPage === index + 1 ? 'current-page': ''}><a href='#'>{index}</a></li>
        )
      })
    }
  </ul>
);

Pagination.propTypes = {
  totalPages: PropTypes.number,
  color: PropTypes.string,
  currentPage: PropTypes.number
};
