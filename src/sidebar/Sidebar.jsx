import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

function Sidebar () {
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
            <Icon type='mail'></Icon>
            <span>Navigation One</span>
          </span>
        }
      >
        <Menu className="ItemGroup" key='g1' title='item 1'>
          <Menu.Item key='1'>option 1</Menu.Item>
        </Menu>
      </SubMenu>
    </Menu>
  );
}
export default Sidebar;