import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import classNames from 'classnames';

const Button = ({ children, type = 'default', onClick, disabled }) => {
  return (
    <button
      className={classNames(styles.button, styles[type], {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'default', 'danger']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
