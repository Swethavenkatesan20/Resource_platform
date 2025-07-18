import React from 'react';
import {
  Layout,
  Menu,
} from 'antd';

import {
  AppstoreOutlined,
  FolderOpenOutlined,
  BarChartOutlined,
  SearchOutlined,
  FileProtectOutlined,
  SettingOutlined,
  FileTextOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import styles from './Sidebar.module.css'
import '../../../index.css'

const { Sider } = Layout;

const Sidebar = ({ collapsed, onCollapse, activeKey, onSelect }) => {
  const menuItems = [
    { key: 'dashboard', icon: <AppstoreOutlined />, label: 'Dashboard' },
    { key: 'projects', icon: <FolderOpenOutlined />, label: 'Projects' },
    { key: 'analytics', icon: <BarChartOutlined />, label: 'Analytics' },
    { key: 'search', icon: <SearchOutlined />, label: 'Search' },
    { key: 'compliance', icon: <FileProtectOutlined />, label: 'Compliance' },
    { key: 'documents', icon: <FileTextOutlined />, label: 'Documents' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
  ];

  return (
    <Sider className={styles.sider}
      collapsible
      collapsed={collapsed}
      trigger={null}
      onCollapse={onCollapse}
      collapsedWidth={60}
      width={150}
      breakpoint="lg"
      onBreakpoint={(broken) => onCollapse(broken)}
      // style={{
      //   height: '100vh',
      //   position: 'fixed',
      //   left: 0,
      //   top: 0,
      //   bottom: 0,
      //   background: 'rgb(65, 9, 170)',
      //   zIndex: 1000,
      // }}
    >
      

      <Menu 
        mode="inline"
        selectedKeys={[activeKey]}
        theme="dark"
        className="custom-sidebar-menu"
        // className={styles.customSidebarMenu}
        onClick={({ key }) => onSelect(key)}
        items={menuItems.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: collapsed ? '' : item.label,
          title: item.label, // For tooltip when collapsed
        }))}
        style={{ borderRight: 0, background: 'rgb(65, 9, 170)' }}
      />


      <div className={styles.collapseButtonContainer}>
        <button className={styles.collapseButton}
          onClick={() => onCollapse(!collapsed)}
          // style={{
          //   border: 'none',
          //   background: 'transparent',
          //   color: '#fff',
          //   cursor: 'pointer',

          // }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>
    </Sider>

  );
};

export default Sidebar;
