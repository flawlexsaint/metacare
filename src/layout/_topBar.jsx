import IconsComponent from "../assets/images/icons";
import DropdownComponent from "../components/dropdownComponent";
import SearchComponent from "../components/searchComponent";

const TopBar = () => {
  const searchProps = {
    style: "me-3 global_search",
    content: "Ask us any question",
    icon: "p-input-icon-right",
  };

  const profile = (
    <>
      <button type="button" class="border-0 bg-white">
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
        <div className="m-4 d-flex justify-content-between">
          <div className="sm_hide">
            <SearchComponent props={searchProps} />
          </div>
          <DropdownComponent content={profile} />
        </div>
      </div>
    </>
  );
};

export default TopBar;
