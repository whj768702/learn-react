import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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

import { NumberListClass, NumberListFunction } from './key/key';

const { Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;

function SideMenu() {
  const [collapsed, toggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState([]);

  const [, setPath] = useState('/Game');
  const [, setComponent] = useState();

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
    setPath('/' + keyPath ? keyPath + '/' + key : key);
    setComponent(key);
  }
  const routerArray = [
    { name: 'Game', component: Game },
    { name: 'MyApp', component: MyApp, params: { names: 'whj' } },
    { name: 'Clock', component: Clock },
    { name: 'MyClock', component: MyClock },
    { name: 'Context', component: ContextDemo },
    {
      name: 'hooks',
      component: 'hooks',
      children: [
        { name: 'useState', component: useStateDemo },
        { name: 'useMemo', component: useMemoDemo },
        { name: 'useRef', component: useRefDemo },
        { name: 'useReducer1', component: ReducerDemo },
        { name: 'useEffect', component: useEffectDemo },
        { name: 'useContext', component: UseContextDemo },
        { name: 'useReducer2', component: UseReducerDemo },
        { name: 'customHooks', component: CustomHooks },
        { name: 'useCallback', component: UseCallbackDemo },
        { name: 'useLayoutEffect', component: UseLayoutEffectDemo },
      ],
    },
    {
      name: 'key',
      children: [
        { name: 'class', component: NumberListClass },
        { name: 'functional', component: NumberListFunction },
      ],
    },
  ];

  const MenuList = () => {
    const GenerateMenu = (routerArray) => {
      console.log('router array: ', routerArray);
      return routerArray.map((item) => {
        if (item.children) {
          return (
            <SubMenu key={item.name} title={<span>{item.name}</span>}>
              {item.children.map((child) => {
                return (
                  <Item key={child.name}>
                    <span>{child.name}</span>
                    <Link to={'/' + item.name + '/' + child.name} />
                  </Item>
                );
              })}
              ;
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
          <Switch>
            {routerArray.map((route, index) => {
              console.log('route: ', route);
              return (
                <Route
                  key={index}
                  path={'/' + route.name}
                  render={() => <route.component {...route.params} />}
                />
              );
            })}
          </Switch>
          {/* <Route path="/Game" component={Game} />
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
          <Route path="/key/NumberListClass" component={NumberListClass} /> */}
        </Content>
      </Layout>
    </Layout>
  );
}
function Homepage() {
  return <BrowserRouter>{SideMenu()}</BrowserRouter>;
}

export default Homepage;
