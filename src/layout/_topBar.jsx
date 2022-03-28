import IconsComponent from "../assets/images/icons";
import DropdownComponent from "../components/dropdownComponent";
import SearchComponent from "../components/searchComponent";

const TopBar = ({ props }) => {
  const searchProps = {
    style: "me-3 global_search",
    content: "Ask us any question",
    icon: "p-input-icon-right",
  };

  const profile = (
    <>
      <button type="button" class="border-0 bg-white xs_hide md_hide">
        <IconsComponent type="notification" />
        <span class="badge bg-danger ms-2">3</span>
        <span className="border-end ms-4 me-3"></span>
      </button>
      <IconsComponent type="avatar" />
    </>
  );

  return (
    <>
      <div className="topbar_border">
        <div className="d-flex m-3 justify-content-between">
          <div className="md_hide lg_hide align-items-center d-flex justify-content-center">
            <div className="md_hide lg_hide click" onClick={props}>
              <IconsComponent type="drawer icon" />
            </div>
            <div className="sidebar_tag pe-2 ps-2 pt-1 ms-2">
              <h1 className="sidebar_header">Metacare</h1>
              <a className="sidebar_anchor" href="mailto:adeyinka@metacare.app">
                adeyinka@metacare.app
              </a>
            </div>
          </div>
          <div className="xs_hide sm_hide">
            <SearchComponent props={searchProps} />
          </div>
          <DropdownComponent content={profile} />
        </div>
      </div>
    </>
  );
};

export default TopBar;
