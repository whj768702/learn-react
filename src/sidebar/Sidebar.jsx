import React from 'react';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Game from '../game/game';

const { SubMenu } = Menu;

function Sidebar() {
  const handleClick = e => {
    console.log('click: ', e);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
    >
      <SubMenu
        key='sub1'
        title={
          <span>
            <Icon type='mail' />
            <span>Navigation One</span>
          </span>
        }
      >
        <Menu className="ItemGroup" key='g1' title='item 1'>
          <Menu.Item key='Game'>
            <Link to="/Game">Game</Link>
          </Menu.Item>
        </Menu>
      </SubMenu>
    </Menu>
  );
}
export default Sidebar;