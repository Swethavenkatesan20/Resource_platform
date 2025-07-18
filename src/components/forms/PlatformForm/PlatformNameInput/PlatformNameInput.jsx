import React from 'react';
import {Form,Input} from 'antd'
import styles from './PlatformNameInput.module.css'
 //import Input from '../../../common/Input/Input';
//import Input from '../../common/Input/Input';

const PlatformNameInput = ({ value, onChange, error }) => {
  return (
    
    <Form.Item
      label={<span className={styles.label}>Platform Name</span>}
      name="platformName"
      rules={[{ required: true, message: 'Please enter platform name' }]}
    >
      <Input className={styles.input} placeholder="Enter platform name" />
    </Form.Item>
  );
};

export default PlatformNameInput;
