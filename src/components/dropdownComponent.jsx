import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropdownComponent = ({ content, style }) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return content ? (
    <Dropdown className={style} overlay={menu} trigger={["click"]}>
      <a
        className="ant-dropdown-link dropdown_component"
        onClick={(e) => e.preventDefault()}
      >
        {content}
        <DownOutlined className="ms-2 mb-1" />
      </a>
    </Dropdown>
  ) : null;
};

export default DropdownComponent;
