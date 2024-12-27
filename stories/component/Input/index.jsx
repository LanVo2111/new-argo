import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/style.css'

export const Input = ({ placeholder, name, label, onChange, type, disabled }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const handleChangeInput = (e) => {
    const valueInput = e.target.value
    setValue(valueInput)
    if (valueInput.length === 0) {
      setError(true)
    } else {
      setError(false)
    }
    onChange()
  }

  return (
    <div className={`form__group ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}>
      <input type={type} class="form__field" value={value}
        placeholder={placeholder} name={name} id={name} onChange={handleChangeInput} onFocus={handleChangeInput}/>
      <label for={name} class="form__label">{label}</label>
    </div>
  )
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'number']),
  disabled: PropTypes.bool
};
