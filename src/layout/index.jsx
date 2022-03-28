import { useState } from "react";
import { Drawer, Button } from "antd";
import Content from "./_content";
import Sidebar from "./_sidebar";
import TopBar from "./_topBar";

const Layout = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="xs_hide sm_hide">
        <div className="wrapper">
          <div className="d-flex">
            <Sidebar />
            <div>
              <TopBar />
              <div className="screen_scroll">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md_hide lg_hide xl_hide xxl_hide">
        <div>
          <TopBar props={showDrawer} />
          <div className="screen_scroll">
            <Content />
          </div>
        </div>
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          getContainer={false}
          style={{ position: "absolute" }}
          width={300}
        >
          <Sidebar />
        </Drawer>
      </div>
    </>
  );
};

export default Layout;
