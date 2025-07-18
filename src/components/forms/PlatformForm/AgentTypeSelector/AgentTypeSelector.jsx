import React from 'react';
import { Select,Form } from 'antd';
import styles from './AgentTypeSelector.module.css';

const { Option } = Select;

const AgentTypeSelector = ({ value, onChange }) => {
  return (
    // <div className={styles.wrapper}>
      <Form.Item
      label={
        <span className={styles.label}>
          Type of Agent 
          {/* <span className={styles.required}>*</span> */}
        </span>
      }
      name="agentType"
      rules={[{ required: true, message: 'Please select an agent type' }]}
    >
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
    {/* </div> */}
    </Form.Item>
  );
};

export default AgentTypeSelector;
