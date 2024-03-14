// App.jsx
import { Button, Layout } from 'antd';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './App.css';
import CustomHeader from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const { Sider, Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed} width={250} className='sider'>
        <Sidebar collapsed={collapsed} />
        <Button type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} className='triger-btn'/>
      </Sider>
      <Layout>
        <Header className='header'>
          <CustomHeader />
        </Header>
        <Content className='content'>
          <MainContent />
        </Content>
        <Footer className = 'footer'/>
      </Layout>
    </Layout> 
  );
};

export default App;
