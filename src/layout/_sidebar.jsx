import { useState } from "react";
import { Menu } from "antd";
import IconsComponent from "../assets/images/icons";

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState(["Analytics"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className="sidebar"
    >
      <div className="d-flex justify-content-center">
        <div className="sidebar_tag p-4 pt-2 pb-2 mt-4 mb-4">
          <h1 className="sidebar_header">Metacare</h1>
          <a className="sidebar_anchor" href="mailto:adeyinka@metacare.app">
            adeyinka@metacare.app
          </a>
        </div>
      </div>
      <SubMenu
        className="menu_items"
        key="Admin"
        icon={<IconsComponent type="admin" />}
        title="Admin"
      >
        <Menu.Item className="menu_items" key="1">
          Option 1
        </Menu.Item>
        <Menu.Item className="menu_items" key="2">
          Option 2
        </Menu.Item>
      </SubMenu>
      <SubMenu
        className="menu_items"
        key="Knowledge Base"
        icon={<IconsComponent type="knowledge" />}
        title="Knowledge Base"
      >
        <Menu.Item className="menu_items" key="3">
          Option 3
        </Menu.Item>
        <Menu.Item className="menu_items" key="4">
          Option 4
        </Menu.Item>
      </SubMenu>
      <SubMenu
        className="menu_items"
        key="Train Sam"
        icon={<IconsComponent type="knowledge" />}
        title="Train SAM"
      >
        <Menu.Item className="menu_items" key="5">
          Option 5
        </Menu.Item>
        <Menu.Item className="menu_items" key="6">
          Option 6
        </Menu.Item>
      </SubMenu>
      <SubMenu
        className="menu_items"
        key="Agent Inbox"
        icon={<IconsComponent type="agent" />}
        title="Agent Inbox"
      >
        <Menu.Item className="menu_items" key="7">
          Option 7
        </Menu.Item>
        <Menu.Item className="menu_items" key="8">
          Option 8
        </Menu.Item>
      </SubMenu>
      <SubMenu
        className="menu_items"
        key="Help Center"
        icon={<IconsComponent type="help center" />}
        title="Help Center"
      >
        <Menu.Item className="menu_items" key="9">
          Option 9
        </Menu.Item>
        <Menu.Item className="menu_items" key="10">
          Option 10
        </Menu.Item>
      </SubMenu>
      <SubMenu
        className="menu_items"
        key="Analytics"
        icon={<IconsComponent type="analytics" />}
        title="Analytics"
      >
        <Menu.Item className="menu_items" key="11">
          Teams
        </Menu.Item>
        <Menu.Item className="menu_items" key="12">
          Knowledge Base
        </Menu.Item>
        <Menu.Item className="menu_items" key="13">
          Training SAM
        </Menu.Item>
        <Menu.Item className="menu_items" key="14">
          Help Center
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sidebar;
