import React from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

const Input = ({ label, error, required, className, ...rest }) => {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        className={classNames(styles.input, { [styles.error]: error }, className)}
        {...rest}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
