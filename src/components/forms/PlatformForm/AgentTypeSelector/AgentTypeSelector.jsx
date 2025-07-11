import React from 'react';
import { Select } from 'antd';
import styles from './AgentTypeSelector.module.css';

const { Option } = Select;

const AgentTypeSelector = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Type of Agent <span className={styles.required}>*</span></label>
      <Select
        value={value}
        onChange={onChange}
        className={styles.select}
        placeholder="Select Agent Type"
      >
        <Option value="windows">Windows</Option>
        <Option value="linux">Linux</Option>
        <Option value="mac">Mac</Option>
      </Select>
    </div>
  );
};

export default AgentTypeSelector;
