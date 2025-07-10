// src/components/forms/PlatformForm/PlatformNameInput.jsx
import React from 'react';
import Input from '../../../common/Input/Input';
//import Input from '../../common/Input/Input';

const PlatformNameInput = ({ value, onChange, error }) => {
  return (
    <Input
      label="Platform Name"
      required
      value={value}
      onChange={onChange}
      error={error}
      placeholder="Enter platform name"
    />
  );
};

export default PlatformNameInput;
