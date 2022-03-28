import ButtonComponent from "./buttonComponent";
import ChartComponent from "./chartComponent";
import DropdownComponent from "./dropdownComponent";
import SearchComponent from "./searchComponent";

const EfficiencyTab = ({ selectedTab }) => {
  const searchProps = {
    style: "me-3 search_component full_width",
    content: "Search",
    icon: "p-input-icon-left",
  };

  const buttonProps = {
    style: "primary_btn me-3",
    content: "Export",
  };

  const chartProps = [
    {
      chartHeader: "Average response Time",
      priorityColor: "#F05D23",
      cardTitle1: "Average Response Time",
      cardMins1: "30 Mins",
      cardTitle2: "Response Time",
      cardMins2: "1 Hour 30 Mins",
    },
    {
      chartHeader: "Replies per resolution ",
      priorityColor: "#3E68FF",
      cardTitle1: "Average Resolution Rate",
      cardMins1: "30 Mins",
      cardTitle2: "Average Time",
      cardMins2: "1 Hour 30 Mins",
    },
    {
      chartHeader: "Average resolution time ",
      priorityColor: "#FB6491",
      cardTitle1: "Average Resolution Rate",
      cardMins1: "30 Mins",
      cardTitle2: "Response Time",
      cardMins2: "1 Hour 30 Mins",
    },
    {
      chartHeader: "First contact resolution rate",
      priorityColor: "#07C9E2",
      cardTitle1: "Average Contact Rate",
      cardMins1: "30 Mins",
      cardTitle2: "Response Time",
      cardMins2: "1 Hour 30 Mins",
    },
  ];

  return (
    selectedTab && (
      <>
        <div className="mt-2 mb-3 d-flex block align-items-center justify-content-between">
          <h1 className="efficiency_header">
            {selectedTab + " " + "Analytics"}
          </h1>
          <div className="d-flex block align-items-center">
            <div className="">
              <SearchComponent props={searchProps} />
            </div>
            <div className="sm_margin lg_hide">
              <DropdownComponent
                style={"me-3 dropdown_height full_width"}
                content="Filter Options"
              />
            </div>
            <div className="sm_margin">
              <ButtonComponent props={buttonProps} />
            </div>
          </div>
        </div>
        <div>
          {chartProps.map((chartProp, i) => (
            <ChartComponent props={chartProp} key={i} />
          ))}
        </div>
      </>
    )
  );
};

export default EfficiencyTab;
