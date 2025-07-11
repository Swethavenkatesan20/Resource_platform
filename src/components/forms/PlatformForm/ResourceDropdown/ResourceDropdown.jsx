import React from 'react';
import { Select } from 'antd';
import styles from './ResourceDropdown.module.css';

const { Option } = Select;

const resources = [
  { label: 'Resource 2.1.1', value: 'res_2_1_1' },
  { label: 'Resource 2.1.2', value: 'res_2_1_2' },
  { label: 'Resource 2.2', value: 'res_2_2' },
  { label: 'Resource 6', value: 'res_6' },
];

const ResourceDropdown = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Resource <span className={styles.required}>*</span>
      </label>
      <Select
        value={value}
        onChange={onChange}
        placeholder="Select Resource"
        className={styles.select}
        size="large"
        classNames={{
          popup: {
            root: 'my-style',
          },
        }}      >
        {resources.map((resource) => (
          <Option key={resource.value} value={resource.value}>
            {resource.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default ResourceDropdown;
