import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import Game from "./game/game";
import MyApp from "./welcome/welcome";
import useStateDemo from "./hooks/useState/useState.jsx";
import useMemoDemo from "./hooks/useMemo/useMemo";
import Clock from "./clock/clock";
import FunctionalClock from "./clock/functionalClock";
import ContextDemo from "./context/contextDemo";
import useRefDemo from "./hooks/useRef/useRef";
import ReducerDemo from "./hooks/userReducer/useReducer";
import useEffectDemo from "./hooks/useEffect/useEffectDemo.tsx";
import UseContextDemo from "./hooks/useContext/useContextDemo";
import UseReducerDemo from "./hooks/userReducer/useReducerDemo";
import CustomHooks from "./hooks/customHooks/customHooks";
import UseCallbackDemo from "./hooks/useCallback/useCallback";
import UseLayoutEffectDemo from "./hooks/useLayoutEffect/useLayoutEffectDemo";
import { NumberListClass, NumberListFunction } from "./key/key.tsx";
import Calculator from "./liftingStateUp/Calculator";
import { NameForm, NameFormFunction, FlavorFormFunction } from "./form/form";
import Road2React from "./road2react/road2react";
import Example from "./composition/composition";
import InAction from "./reactInAction/inAction.tsx";
import Bookings from "./reactInAction/bookings.tsx";
import BookablesList from "./reactInAction/bookablesList.tsx";
import Users from "./reactInAction/users.tsx";

const { Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;

function SideMenu() {
  const navigate = useNavigate();
  const [collapsed, toggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState([]);

  const location = window.location;
  useEffect(() => {
    const currentPath = location.pathname.split("/");
    const menuArray = currentPath.splice(1);
    if (menuArray[0] !== "") {
      setSelectedMenu(menuArray);
    } else {
      setSelectedMenu(["game"]);
    }
    if (menuArray.length >= 2) {
      setSelectedSubMenu(menuArray);
    }
  }, [location]);

  function menuClick({ key, keyPath }) {
    console.log("key: ", key, keyPath);
    setSelectedMenu([key]);
    setSelectedSubMenu(keyPath);
    navigate(`/${keyPath.reverse().join("/")}`);
  }

  const items = [
    { key: "ComponentsThroughProps", label: "ComponentsThroughProps" },
    { key: "Game", label: "Game" },
    { key: "MyApp", label: "MyApp" },
    { key: "Clock", label: "Clock" },
    { key: "FunctionalClock", label: "FunctionalClock" },
    { key: "Context", label: "Context" },
    {
      key: "hooks",
      label: "hooks",
      children: [
        { key: "useState", label: "useState" },
        { key: "useMemo", label: "useMemo" },
        { key: "useRef", label: "useRef" },
        { key: "useReducer1", label: "useReducer1" },
        { key: "useEffect", label: "useEffect" },
        { key: "useContext", label: "useContext" },
        { key: "useReducer2", label: "useReducer2" },
        { key: "customHooks", label: "customHooks" },
        { key: "useCallback", label: "useCallback" },
        { key: "useLayoutEffect", label: "useLayoutEffect" },
      ],
    },
    {
      key: "key",
      label: "key",
      children: [
        { key: "class", label: "class" },
        { key: "functional", label: "functional" },
      ],
    },
    {
      key: "Calculator",
      label: "Calculator",
    },
    {
      key: "form",
      label: "form",
      children: [
        { key: "nameForm", label: "nameForm" },
        { key: "nameFormFunction", label: "nameFormFunction" },
        { key: "flavorForm", label: "flavorForm" },
      ],
    },
    { key: "road2React", label: "road2React" },
    {
      key: "inAction",
      label: "inAction",
      children: [
        { key: "bookings", label: "bookings" },
        { key: "bookables", label: "bookables" },
        { key: "users", label: "users" },
      ],
    },
  ];

  const MenuList = () => {
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["game"]}
          defaultOpenKeys={selectedSubMenu}
          selectedKeys={selectedMenu}
          onClick={menuClick}
          items={items}
        />
      </Sider>
    );
  };

  return (
    <Layout>
      <MenuList />
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
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
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: "calc(100vh - 112px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
function Homepage() {
  return <div>{SideMenu()}</div>;
}

export default Homepage;
