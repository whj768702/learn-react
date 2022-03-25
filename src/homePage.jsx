import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import './index.css';

import Game from './game/game';
import MyApp from './welcome/welcome';
import useStateDemo from './hooks/useState/useState';
import useMemoDemo from './hooks/useMemo/useMemo';
import Clock from './clock/clock';
import FunctionalClock from './clock/functionalClock';
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
import Calculator from './liftingStateUp/Calculator';
import { NameForm, NameFormFunction, FlavorFormFunction } from './form/form';
import Road2React from './road2react/road2react';
import Example from './composition/composition';

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
    console.log('key: ', key, keyPath);
    setSelectedMenu([key]);
    setSelectedSubMenu(keyPath);
  }

  const routerArray = [
    { name: 'Example', component: Example },
    { name: 'Game', component: Game },
    { name: 'MyApp', component: MyApp, params: { names: ['ni', 'wo'] } },
    { name: 'Clock', component: Clock },
    { name: 'FunctionalClock', component: FunctionalClock },
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
        { name: 'class', component: NumberListClass, params: { numbers: [1, 2, 3] } },
        { name: 'functional', component: NumberListFunction, params: { numbers: [1, 2, 3] } },
      ],
    },
    {
      name: 'Calculator',
      component: Calculator
    },
    {
      name: 'form',
      children: [
        { name: 'nameForm', component: NameForm },
        { name: 'nameFormFunction', component: NameFormFunction },
        { name: 'flavorForm', component: FlavorFormFunction },
      ]
    },
    { name: 'road2React', component: Road2React }
  ];

  const MenuList = () => {
    const GenerateMenu = (routerArray) => {
      return routerArray.map((item, index) => {
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 'calc(100vh - 112px)',
          }}
        >
          <Routes>
            {routerArray.map(route => {
              if (route.children) {
                return route.children.map(childRoute => {
                  return (
                    <Route
                      exact
                      strict
                      key={childRoute.name}
                      path={'/' + route.name + '/' + childRoute.name}
                      element={<childRoute.component {...childRoute.params} />}
                    />
                  );
                });
              } else {
                return (
                  <Route
                    exact
                    strict
                    key={route.name}
                    path={'/' + route.name}
                    element={<route.component {...route.params} />}
                  />
                );
              }
            })}
          </Routes>
        </Content>
      </Layout>
    </Layout >
  );
}
function Homepage() {
  return <BrowserRouter>{SideMenu()}</BrowserRouter>;
}

export default Homepage;
