import React from 'react';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <span role="img" aria-label="logo">🏢</span> <span className={styles.title}>Accounting</span>
      </div>
      <div className={styles.right}>
        <BellOutlined className={styles.icon} />
        <UserOutlined className={styles.icon} />
      </div>
    </div>
  );
};

export default TopBar;
