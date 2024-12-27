import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/style.css'
export const Skeleton = ({ height, width, bgColor, variant }) => {
  return (
    <div className={`is-loading ${variant}`}
      style={{ height: `${height}px`, width: `${width}px`, backgroundColor: bgColor }}> </div>
  )
}

Skeleton.prototype = {
  height: PropTypes.number,
  width: PropTypes.number,
  bgColor: PropTypes.string,
  variant: PropTypes.string
}
