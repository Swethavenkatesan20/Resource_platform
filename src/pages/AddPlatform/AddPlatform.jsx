import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import TopBar from '../../components/layout/TopBar/TopBar';
import PageHeader from '../../components/layout/PageHeader/PageHeader';
//  import PlatformForm from '../../components/forms/PlatformForm/PlatformForm';
import styles from './AddPlatform.module.css';
import PlatformForm from '../../components/forms/PlatformForm';

const { Content } = Layout;
const breadcrumbs = [
    { label: 'Home' },
    { label: 'Settings' },
    { label: 'Platform' },
    { label: 'Add New Platform', active: true },
  ];

const AddPlatform = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState('settings');

  return (
    <Layout style={{ minHeight: '100vh' }}>
       <Sidebar collapsed={collapsed} onCollapse={setCollapsed} activeKey={activeSidebar} onSelect={setActiveSidebar} />

      <Layout
        className={styles.mainLayout}
        style={{
          marginLeft: collapsed ? 80 : 150,
          transition: 'margin-left 0.3s ease',
        }}
      >
        <TopBar />
        <Content className={styles.content}>
          {activeSidebar === 'settings' ? (
            <>
              <PageHeader title="PLATFORM" breadcrumbs={breadcrumbs}/>
               <PlatformForm /> 
            </>
          ) : (
            <div style={{ padding: '2rem', fontSize: '1.2rem' }}>
              In Progress: {activeSidebar}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AddPlatform;
