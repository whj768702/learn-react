import React, {useState} from 'react';
import {Layout, Menu, Icon} from "antd";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Game from "./game/game";
import MyApp from "./welcome/welcome";
import useStateDemo from "./hooks/useState/useState";
import useMemoDemo from "./hooks/useMemo/useMemo";
import './index.css';
import {Clock, MyClock} from "./clock/clock";
import ContextDemo from './context/contextDemo';
import useRefDemo from "./hooks/useRef/useRef";
import ReducerDemo from "./hooks/userReducer/useReducer";
import useEffectDemo from './hooks/useEffect/useEffectDemo';
import UseContextDemo from './hooks/useContext/useContextDemo';
import UseReducerDemo from './hooks/userReducer/useReducerDemo';
import CustomHooks from './hooks/customHooks/customHooks';
import UseCallbackDemo from './hooks/useCallback/useCallback';

const {Header, Sider, Content} = Layout;
const {Item, SubMenu} = Menu;

function Homepage() {
  let [collapsed, toggle] = useState(false);

  return (
    <BrowserRouter>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['game']}>
            <Item key='game'>
              <span>Game</span>
              <Link to='/Game'/>
            </Item>
            <Item key='myApp'>
              <span>MyApp</span>
              <Link to='/MyApp'/>
            </Item>
            <Item key='clock'>
              <span>Clock</span>
              <Link to='/Clock'/>
            </Item>
            <Item key='myClock'>
              <span>myClock</span>
              <Link to='/myClock'/>
            </Item>
            <Item key='/Context'>
              <span>Context</span>
              <Link to='/Content'/>
            </Item>
            <SubMenu key='hooks' title={<span>HOOKS</span>}>
              <Item key='useState'>
                <span>useState</span>
                <Link to='/hooks/useState'/>
              </Item>
              <Item key='useMemo'>
                <span>useMemo</span>
                <Link to='/hooks/useMemo'/>
              </Item>
              <Item key='useRef'>
                <span>useRef</span>
                <Link to='/hooks/useRef'/>
              </Item>
              <Item key='useReducer1'>
                <span>useReducer1</span>
                <Link to='/hooks/useReducer1'/>
              </Item>
              <Item key='useEffect'>
                <span>useEffect</span>
                <Link to='/hooks/useEffect'/>
              </Item>
              <Item key='useContext'>
                <span>useContext</span>
                <Link to='/hooks/useContext'/>
              </Item>
              <Item key='useReducer2'>
                <span>useReducer2</span>
                <Link to='/hooks/useReducer2'/>
              </Item>
              <Item key='customHooks'>
                <span>customHooks</span>
                <Link to='/hooks/customHooks'/>
              </Item>
              <Item key='useCallback'>
                <span>useCallback</span>
                <Link to='/hooks/useCallback'></Link>
              </Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => {
                toggle(collapsed = !collapsed);
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 'calc(100vh - 112px)',
            }}
          >
            <Route path='/Game' component={Game}/>
            <Route path='/MyApp' render={() => <MyApp names={'I'}/>}/>
            <Route path="/Clock" component={Clock}/>
            <Route path="/MyClock" component={MyClock}/>
            <Route path="/Context" component={ContextDemo}/>
            <Route path='/hooks/useState' component={useStateDemo}/>
            <Route path='/hooks/useMemo' component={useMemoDemo}/>
            <Route path='/hooks/useRef' component={useRefDemo}/>
            <Route path='/hooks/useReducer1' component={ReducerDemo}/>
            <Route path='/hooks/useEffect' component={useEffectDemo}/>
            <Route path='/hooks/useContext' component={UseContextDemo}/>
            <Route path='/hooks/useReducer2' component={UseReducerDemo}/>
            <Route path='/hooks/customHooks' component={CustomHooks}/>
            <Route path='/hooks/useCallback' component={UseCallbackDemo}/>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default Homepage;
