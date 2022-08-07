import React, { useContext } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  LineSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { StateContext } from "../../contexts/contextProvider";

const LineChart = () => {
  const { currentMode } = useContext(StateContext);
  return (
    <ChartComponent
      id="line-chart"
      height="420px "
      // primaryXAxis={LinePrimaryXAxis}
      // primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item}></SeriesDirective>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export { LineChart };
