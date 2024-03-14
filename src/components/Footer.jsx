import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { CloseOutlined, SelectOutlined, DeleteOutlined } from '@ant-design/icons';
import { MdOutlineArchive } from "react-icons/md";
import '../App.css';

const Footer = () => {
  const menu = (
    <Menu className="footer-dropdown-menu">
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="color">Color</Menu.Item>
      <Menu.Item key="hide">Hide</Menu.Item>
    </Menu>
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="footer">
      <div className="footer-buttons">
        <Button className="footer-button" type="primary" icon={<SelectOutlined />}>
          {isMobile ? null : 'Selected'}
        </Button>
        <Button className="footer-button" icon={<MdOutlineArchive />}>
          {isMobile ? null : 'Archive'}
        </Button>
        <Button className="footer-button" danger icon={<DeleteOutlined />}>
          {isMobile ? null : 'Delete'}
        </Button>
      </div>
      <Dropdown className="footer-dropdown" overlay={menu} placement="topCenter" arrow>
        <Button>More</Button>
      </Dropdown>
      <Button className="footer-close-button" type="text" icon={<CloseOutlined />} />
    </div>
  );
};

export default Footer;
