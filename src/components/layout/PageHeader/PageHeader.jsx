import React from 'react';
import styles from './PageHeader.module.css';
import Button from '../../common/Button/Button';

const PageHeader = ({ title, breadcrumbs = [] , onSave, onCancel }) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLeft}>
        <h2 className={styles.title}>{title}</h2>
        <nav className={styles.breadcrumb}>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={item.active ? styles.active : styles.link}
              >
                {item.label}
              </span>
              {index < breadcrumbs.length - 1 && (
                <span className={styles.separator}>&gt;</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      <div className={styles.headerRight}>
        <Button type="default" onClick={onCancel}>Cancel</Button>
        <Button type="primary" onClick={onSave}>Save</Button>
      </div>
    </div>
  );
};

export default PageHeader;
