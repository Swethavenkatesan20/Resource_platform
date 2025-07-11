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
    <Sider
  collapsible
  collapsed={collapsed}
  onCollapse={onCollapse}
  collapsedWidth={80}
  width={150}
  breakpoint="lg"
  onBreakpoint={(broken) => onCollapse(broken)}
  style={{
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    background: '#001529',
    zIndex: 1000,
  }}
>
  <div
    style={{
      padding: '1rem',
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: collapsed ? '1rem' : '1.2rem',
      
    }}
  >
    <span role="img" aria-label="logo">🏢</span>
    {!collapsed }
  </div>

  <Menu
  mode="inline"
  selectedKeys={[activeKey]}
  theme="dark"
  onClick={({ key }) => onSelect(key)}
  items={menuItems.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: collapsed ? '' : item.label,
    title: item.label, // For tooltip when collapsed
  }))}
  style={{ borderRight: 0 }}
/>


  <div
    style={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      padding: '0.5rem',
    }}
  >
    <button
      onClick={() => onCollapse(!collapsed)}
      style={{
        border: 'none',
        background: 'transparent',
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </button>
  </div>
</Sider>

  );
};

export default Sidebar;
