import React, { useState } from 'react';
import { Tree, Tag } from 'antd';
import styles from './AlternativeResourceTree.module.css';
import { resourceTreeData } from '../../../../utils/treeData';

const AlternativeResourceTree = ({ selected = [], onChange }) => {
 // const [selectedKeys, setSelectedKeys] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);

  const handleCheck = (checkedKeys) => {
    onChange(checkedKeys); //  Send back to parent
  };

  const handleExpand = (keys) => {
    setExpandedKeys(keys);
  };

  return (
    <div className={styles.treeWrapper}>
      <label className={styles.label}>Alternative Resource</label>

      <div className={styles.selectionBox}>
        {selected.length > 0 ? (
          selected.map((key) => (
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
          checkedKeys={selected}
          onCheck={handleCheck}
          expandedKeys={expandedKeys}
          onExpand={handleExpand}
          blockNode
          showLine={{ showLeafIcon: false }} 
        />
      </div>
    </div>
  );
};

export default AlternativeResourceTree;
