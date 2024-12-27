import React from "react";
import PropTypes from 'prop-types';
import '../../assets/style.css'

export const RadioButton = ({ name, isDisabled, isChecked, label, hasBorder, ...props }) => {
  return (
    <label className={`${hasBorder ? "has-border" : ''}`}>
      <input type="radio" name={name} disabled={isDisabled} checked={isChecked} {...props}/> 
      {label}
    </label>
  )
}

RadioButton.prototype = {
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
}
