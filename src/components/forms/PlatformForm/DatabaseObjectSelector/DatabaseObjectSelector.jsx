import React from 'react';
import { Select } from 'antd';
import styles from './DatabaseObjectSelector.module.css';

const dbOptions = [
  { label: 'Schema', value: 'schema' },
  { label: 'Table', value: 'table' },
  { label: 'View', value: 'view' },
];

const DatabaseObjectSelector = ({ value, onChange }) => {
  return (
    <div className={styles.selector}>
      <label className={styles.label}>DB Object</label>
      <Select
        placeholder="Select a DB Object"
        options={dbOptions}
        value={value}
        onChange={onChange}
        className={styles.select}
      />
    </div>
  );
};

export default DatabaseObjectSelector;
