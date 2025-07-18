import React from 'react';
import {
  BellOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.rightContent}>
        
        <span className={styles.title}>Accounting</span>
        <QuestionCircleOutlined className={styles.icon} />
        <BellOutlined className={styles.icon} />
        <div className={styles.avatar}>AU</div>
      </div>
    </div>
  );
};

export default TopBar;
