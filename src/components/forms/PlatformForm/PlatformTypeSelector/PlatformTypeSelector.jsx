// src/components/forms/PlatformForm/PlatformTypeSelector.jsx

import React from 'react';
import { Radio } from 'antd';
import styles from './PlatformTypeSelector.module.css';


const PlatformTypeSelector = ({ value, onChange }) => {



  return (
    <div className={styles.container}>
      <label className={styles.label}>Platform Type</label>
      <Radio.Group
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={styles.radioGroup}
      >
        <Radio.Button value="agent">Agent</Radio.Button>
        <Radio.Button value="filesystem">Filesystem</Radio.Button>
        <Radio.Button value="nas">NAS</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default PlatformTypeSelector;
