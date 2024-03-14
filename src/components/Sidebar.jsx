import { Button, Flex, Menu } from 'antd';
import React, { useState } from 'react';
import profilePic from '../assets/profilep.png';
import logop from '../assets/logo.png';
import {
  TeamOutlined,
  FolderOutlined,
  QuestionCircleOutlined,
  PlusOutlined,
  DollarOutlined,
  PlusSquareOutlined
} from '@ant-design/icons';
import { IoMdClose } from 'react-icons/io';
import { GrChapterAdd } from 'react-icons/gr';
import { RiPenNibLine } from 'react-icons/ri';
import { TbSpeakerphone } from 'react-icons/tb';
import { IoCodeSharp } from 'react-icons/io5';
import '../index.css';

const { SubMenu } = Menu;

const Sidebar = ({ collapsed }) => {
  const [teams, setTeams] = useState([
    { name: "Design team", icon: <RiPenNibLine /> },
    { name: "Marketing team", icon: <TbSpeakerphone /> },
    { name: "Development team", icon: <IoCodeSharp /> }
  ]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [newTeamName, setNewTeamName] = useState('');

  const handleDeleteTeam = (index) => {
    const updatedTeams = [...teams];
    updatedTeams.splice(index, 1);
    setTeams(updatedTeams);
    setSelectedTeam(null);
  };

  const handleCreateTeam = () => {
    if (newTeamName.trim() !== '') {
      setTeams([...teams, { name: newTeamName }]);
      setNewTeamName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateTeam();
    }
  };

  return (
    <>
      <Flex align='center' justify='center'>
        {!collapsed ? (
          <div className="sidebar-top">
            <img src={logop} alt="Icon" className="sidebar-icon" />
            <div className="sidebar-info">
              <span className="sidebar-inc">INC</span>
              <span className="sidebar-company">InnovateHub</span>
            </div>
            <div className="profile-pic-wrapper">
              <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
          </div>
        ) : (
          <div className="sidebar-top">
            <img src={logop} alt="Icon" className="sidebar-icon" />
          </div>
        )}
      </Flex>

      {!collapsed ? (
        <div className="sidebar-teams">
          <div className="team-container">
            {teams.map((team, index) => (
              <div
                key={index}
                className={`team-item ${selectedTeam === index ? 'selected' : ''}`}
                onClick={() => setSelectedTeam(index)}
              >
                <span className="team-info">
                  <span className="team-icon">{team.icon}</span>
                  <span className="team-name">{team.name}</span>
                </span>
                <div className="delete-team" onClick={(e) => { e.stopPropagation(); handleDeleteTeam(index); }}>
                  <IoMdClose />
                </div>
              </div>
            ))}
            <hr />
            <div className="create-team">
              <button onClick={handleCreateTeam}><GrChapterAdd style={{ fontSize: '1.2rem' }} /></button>
              <input type="text" value={newTeamName} onChange={(e) => setNewTeamName(e.target.value)} onKeyPress={handleKeyPress} placeholder="Create a team" />
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-teams-collapsed">
          {teams.map((team, index) => (
            <a href="#" key={index} className="team-item-collapsed">
              <span className="team-info">
                <span className="team-icon">{team.icon}</span>
              </span>
            </a>
          ))}
        </div>
      )}

      {!collapsed ? (
        <p className='folders'> FOLDERS  <PlusOutlined className="plus-icon" /></p>
      ) : (
        <PlusSquareOutlined className='folders-collapse'/>
      )}

      <Menu mode='inline' defaultSelectedKeys={['1']} className='menu-bar'>
        <SubMenu key="sub1" icon={<FolderOutlined />} title="Products">
          <Menu.Item key="1">Roadmap</Menu.Item>
          <Menu.Item key="2">Feedback</Menu.Item>
          <Menu.Item key="3">Performance</Menu.Item>
          <Menu.Item key="4">Team</Menu.Item>
          <Menu.Item key="5">Analytics</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<FolderOutlined />} title="Sales">
          <Menu.Item key="7">Submenu 6</Menu.Item>
          <Menu.Item key="8">Submenu 7</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<FolderOutlined />} title="Design">
          <Menu.Item key="9">Submenu 6</Menu.Item>
          <Menu.Item key="10">Submenu 7</Menu.Item>
        </SubMenu>
        <Menu.Item key="11" icon={<FolderOutlined />}>
          Office
        </Menu.Item>
        <Menu.Item key="12" icon={<FolderOutlined />}>
          Legal
        </Menu.Item>
        <div style={{ height: '2rem' }}></div> 
        <Menu.Item key="13" icon={<TeamOutlined />}>
          Invite teammates
        </Menu.Item>
        <Menu.Item key="14" icon={<QuestionCircleOutlined />}>
          Help and first steps
        </Menu.Item>
        <Menu.Item key="15" className='small-txt' icon={<DollarOutlined />}>
          7 days left<Button className='billing-btn'>Add billing</Button>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
