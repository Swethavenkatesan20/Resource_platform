import {
    UserOutlined,
    FolderOpenOutlined,
    BarChartOutlined,
    TeamOutlined,
    BranchesOutlined,
  } from '@ant-design/icons';
  
  export const resourceTreeData = [
    {
      title: 'Resource 8',
      key: 'res-8',
      icon: <FolderOpenOutlined />,
      children:[
        {
          title: 'Resource 8',
          key:'res-8.1',
        }
      ]
    },
    {
      title: 'Resource 2',
      key: 'res-2',
      icon: <FolderOpenOutlined />,
      children: [
        {
          title: 'Resource 2.1',
          key: 'res-2.1',
          icon: <TeamOutlined />,
          children: [
            {
              title: 'Resource 2.1.1',
              key: 'res-2.1.1',
              icon: <UserOutlined />,
            },
            {
              title: 'Resource 2.1.2',
              key: 'res-2.1.2',
              icon: <UserOutlined />,
            }
          ]
        },
        {
          title: 'Resource 2.2',
          key: 'res-2.2',
          icon: <BranchesOutlined />,
          children: [
            {
              title: 'Resource 2.2.1',
              key: 'res-2.2.1',
              icon: <BarChartOutlined />,
            },
            {
              title: 'Resource 2.2.2',
              key: 'res-2.2.2',
              icon: <BarChartOutlined />,
            }
          ]
        }
      ]
    },
    {
      title: 'Resource 7',
      key: 'res-7',
      icon: <FolderOpenOutlined />,
      children: [
        {
          title: 'Resource 7.1',
          key: 'res-7.1',
          icon: <UserOutlined />,
        },
        {
          title: 'Resource 7.2',
          key: 'res-7.2',
          icon: <TeamOutlined />,
          children: [
            {
              title: 'Resource 7.2.1',
              key: 'res-7.2.1',
              icon: <UserOutlined />,
            }
          ]
        }
      ]
    },
    {
      title: 'Resource 6',
      key: 'res-6',
      icon: <UserOutlined />,
      children: [
        {
          title: 'Resource 6.1',
          key: 'res-6.1',
          icon: <UserOutlined />,
        },
        {
          title: 'Resource 6.2',
          key: 'res-6.2',
          icon: <BarChartOutlined />,
        }
      ]
    }
  ];
  