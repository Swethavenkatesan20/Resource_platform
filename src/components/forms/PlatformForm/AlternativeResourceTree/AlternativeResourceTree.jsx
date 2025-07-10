import React, { useState } from 'react';
import { Tree, Tag } from 'antd';
import styles from './AlternativeResourceTree.module.css';
import { resourceTreeData } from '../../../../utils/treeData';

const AlternativeResourceTree = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);

  const handleCheck = (checkedKeys) => {
    setSelectedKeys(checkedKeys);
  };

  const handleExpand = (keys) => {
    setExpandedKeys(keys);
  };

  return (
    <div className={styles.treeWrapper}>
      <label className={styles.label}>Alternative Resource</label>

      <div className={styles.selectionBox}>
        {selectedKeys.length > 0 ? (
          selectedKeys.map((key) => (
            <Tag key={key} className={styles.resourceTag}>
              {key.replace('res-', 'Resource ')}
            </Tag>
          ))
        ) : (
          <span className={styles.placeholder}>Choose Resource...</span>
        )}
      </div>

      <div className={styles.treeBox}>
        <Tree
          checkable
          showIcon
          selectable={false}
          treeData={resourceTreeData}
          checkedKeys={selectedKeys}
          onCheck={handleCheck}
          expandedKeys={expandedKeys}
          onExpand={handleExpand}
          blockNode
          showLine={{ showLeafIcon: false }} // ✅ built-in + / - toggler
        />
      </div>
    </div>
  );
};

export default AlternativeResourceTree;
