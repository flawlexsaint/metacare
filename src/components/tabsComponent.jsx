import { useState } from "react";
import { Tabs } from "antd";
import EfficiencyTab from "./efficiencyTab";

const { TabPane } = Tabs;

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState("Efficiency");
  const tabs = ["Efficiency", "Volume", "Customer Satisfaction", "Backlog"];
  const callback = (key) => {
    setSelectedTab(key);
  };
  return (
    <div className="content p-4 border">
      <Tabs className="tabs_title" defaultActiveKey="1" onChange={callback}>
        {tabs.map((tab) => (
          <TabPane tab={tab} key={tab}>
            <div className="row">
              <EfficiencyTab selectedTab={selectedTab} />
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default TabComponent;
