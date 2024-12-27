import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/style.css'
import { FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, size, label, color, isExternal, linkHref, isDisabled, isPrimary, ...props }) => {
  const styleText = {
    backgroundColor: 'transparent', color: color, border: 'none',
    height: 'unset', maxWidth: 'fit-content', width: 'unset'
  }

  return (
    <div className={['btn', `${isPrimary ? ' btn-primary' : ''} 
      ${isDisabled ? 'disabled' : ''} btn--${size}`].join('')}
      style={{ backgroundColor: backgroundColor }}
    >
      <a
        href={linkHref}
        className={['storybook-button', `storybook-button--${size} ${isExternal ? 'external' : ''}`].join(' ')}
        {...props}
        style={{ color: color }}
      >
        {label}
        {isExternal ? <FaExternalLinkAlt /> : ''}
      </a>
    </div>
  );
};

Button.propTypes = {
  isPrimary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  isExternal: PropTypes.bool,
  linkHref: PropTypes.string,
  isDisabled: PropTypes.bool
};
