import React from 'react';
import {Form} from 'antd'
 import Input from '../../../common/Input/Input';
//import Input from '../../common/Input/Input';

const PlatformNameInput = ({ value, onChange, error }) => {
  return (
    <Form.Item
      label="Platform Name"
      name="platformName"
      rules={[{ required: true, message: 'Please enter platform name' }]}
    >
      <Input placeholder="Enter platform name" />
    </Form.Item>
  );
};

export default PlatformNameInput;
