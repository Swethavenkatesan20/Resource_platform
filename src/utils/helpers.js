// utils/helpers.js
import {
    FolderOpenOutlined,
    UserOutlined,
    TeamOutlined,
    BarChartOutlined,
    BranchesOutlined,
  } from '@ant-design/icons';
  
  export const getIconByType = (type) => {
    switch (type) {
      case 'folder':
        return <FolderOpenOutlined />;
      case 'user':
        return <UserOutlined />;
      case 'team':
        return <TeamOutlined />;
      case 'bar':
        return <BarChartOutlined />;
      case 'branch':
        return <BranchesOutlined />;
      default:
        return null;
    }
  };
  