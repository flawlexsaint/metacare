import { useState } from "react";
import ApexCharts from "react-apexcharts";
import { Calendar } from "primereact/calendar";

const ChartComponent = ({ props }) => {
  const [date2, setDate2] = useState(null);
  const [series, setSeries] = useState([
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: props.priorityColor,
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
  });

  return (
    props && (
      <div className="mt-4">
        <div className="border">
          <div className="row">
            <div className="col-lg-9 border-end p-4">
              <div className="d-flex block align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <h6 className="chart_header">{props.chartHeader}</h6>
                  <span className="badge chart_badge ms-3">+4.14% </span>
                </div>
                <div className="d-flex align-items-center sm_margin">
                  <button type="button" className="btn priority me-2">
                    <button
                      className="high_priority me-2"
                      style={{ background: props.priorityColor }}
                    ></button>{" "}
                    High Priority
                  </button>
                  <div>
                    <Calendar
                      inputClassName="calendar_input"
                      value={date2}
                      onChange={(e) => setDate2(e.value)}
                      showIcon
                      className="priority border-0 calendar"
                      placeholder="This Month"
                    />
                  </div>
                </div>
              </div>
              <ApexCharts
                options={options}
                series={series}
                type="line"
                height={330}
                width="100%"
              />
            </div>
            <div className="col-lg-3">
              <div className="p-3 pe-lg-4">
                <div className="response_time_section p-3 mt-5">
                  <p className="response_time">{props.cardTitle1}</p>
                  <h3 className="response_mins">{props.cardMins1}</h3>
                </div>
                <div className="response_time_section p-3 mt-4">
                  <p className="response_time">{props.cardTitle2}</p>
                  <h3 className="response_mins">{props.cardMins2}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ChartComponent;
