import Content from "./_content";
import Sidebar from "./_sidebar";
import TopBar from "./_topBar";

const Layout = () => {
  return (
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
  );
};

export default Layout;
