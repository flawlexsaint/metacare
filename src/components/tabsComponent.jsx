import { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import EfficiencyTab from "./efficiencyTab";

const TabComponent = () => {
  const tabs = ["Efficiency", "Volume", "Customer Satisfaction", "Backlog"];
  const [key, setKey] = useState("Efficiency");

  return (
    <div className="content p-4 border">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {tabs.map((tab) => (
          <Tab tabClassName="tabs_title" eventKey={tab} title={tab}>
            <EfficiencyTab selectedTab={tab} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TabComponent;
