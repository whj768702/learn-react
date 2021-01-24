import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import './index.css';

import Game from './game/game';
import MyApp from './welcome/welcome';
import useStateDemo from './hooks/useState/useState';
import useMemoDemo from './hooks/useMemo/useMemo';
import { Clock, MyClock } from './clock/clock';
import ContextDemo from './context/contextDemo';
import useRefDemo from './hooks/useRef/useRef';
import ReducerDemo from './hooks/userReducer/useReducer';
import useEffectDemo from './hooks/useEffect/useEffectDemo';
import UseContextDemo from './hooks/useContext/useContextDemo';
import UseReducerDemo from './hooks/userReducer/useReducerDemo';
import CustomHooks from './hooks/customHooks/customHooks';
import UseCallbackDemo from './hooks/useCallback/useCallback';
import UseLayoutEffectDemo from './hooks/useLayoutEffect/useLayoutEffectDemo';

const { Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;

function SideMenu() {
  const [collapsed, toggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState([]);

  const location = window.location;
  useEffect(() => {
    const currentPath = location.pathname.split('/');
    const menuArray = currentPath.splice(1);
    console.log('menuArray: ', menuArray, location.pathname);
    if (menuArray[0] !== '') {
      setSelectedMenu(menuArray);
    } else {
      setSelectedMenu(['game']);
    }
    if (menuArray.length >= 2) {
      setSelectedSubMenu(menuArray);
    }
  }, [location]);

  function menuClick({ key, keyPath }) {
    console.log('key1111: ', key, keyPath);
    setSelectedMenu(key);
    setSelectedSubMenu(keyPath);
  }

  const MenuList = () => {
    const routerArray = [
      { name: 'game', component: 'Game' },
      { name: 'myApp', component: 'MyApp' },
      { name: 'clock', component: 'Clock' },
      { name: 'myClock', component: 'myClock' },
      { name: 'Context', component: 'Context' },
      {
        name: 'hooks',
        component: 'hooks',
        children: [
          { name: 'useState', component: 'useState' },
          { name: 'useMemo', component: 'useMemo' },
          { name: 'useRef', component: 'useRef' },
          { name: 'useReducer1', component: 'userReducer1' },
          { name: 'useEffect', component: 'useEffect' },
          { name: 'useContext', component: 'useContext' },
          { name: 'useReducer2', component: 'useReducer2' },
          { name: 'customHooks', component: 'customHooks' },
          { name: 'useCallback', component: 'useCallback' },
          { name: 'useLayoutEffect', component: 'useLayoutEffect' },
        ],
      },
    ];
    const GenerateMenu = (routerArray) => {
      console.log('router array: ', routerArray);
      return routerArray.map((item) => {
        if (item.children) {
          return (
            <SubMenu key={item.name} title={<span>{item.name}</span>}>
              {GenerateMenu(item.children)}
            </SubMenu>
          );
        } else {
          return (
            <Item key={item.name}>
              <span>{item.name}</span>
              <Link to={'/' + item.name} />
            </Item>
          );
        }
      });
    };
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['game']}
          defaultOpenKeys={selectedSubMenu}
          selectedKeys={selectedMenu}
          onClick={menuClick}
        >
          {GenerateMenu(routerArray)}
        </Menu>
      </Sider>
    );
  };

  return (
    <Layout>
      <MenuList />
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {collapsed ? (
            <MenuFoldOutlined
              onClick={() => {
                toggle(false);
              }}
            />
          ) : (
            <MenuUnfoldOutlined
              onClick={() => {
                toggle(true);
              }}
            />
          )}
          {/* <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => {
                toggle((collapsed = !collapsed));
              }}
            /> */}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 'calc(100vh - 112px)',
          }}
        >
          <Route path="/Game" component={Game} />
          <Route path="/MyApp" render={() => <MyApp names={'I'} />} />
          <Route path="/Clock" component={Clock} />
          <Route path="/MyClock" component={MyClock} />
          <Route path="/Context" component={ContextDemo} />
          <Route path="/hooks/useState" component={useStateDemo} />
          <Route path="/hooks/useMemo" component={useMemoDemo} />
          <Route path="/hooks/useRef" component={useRefDemo} />
          <Route path="/hooks/useReducer1" component={ReducerDemo} />
          <Route path="/hooks/useEffect" component={useEffectDemo} />
          <Route path="/hooks/useContext" component={UseContextDemo} />
          <Route path="/hooks/useReducer2" component={UseReducerDemo} />
          <Route path="/hooks/customHooks" component={CustomHooks} />
          <Route path="/hooks/useCallback" component={UseCallbackDemo} />
          <Route path="/hooks/useLayoutEffect" component={UseLayoutEffectDemo} />
        </Content>
      </Layout>
    </Layout>
  );
}
function Homepage() {
  return <BrowserRouter>{SideMenu()}</BrowserRouter>;
}

export default Homepage;
