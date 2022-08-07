import React from "react";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
const Stacked = ({ width, height }: { width?: any; height?: any }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id={"stack chart"}
      // primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((el, index) => (
          <SeriesDirective key={index} {...el}></SeriesDirective>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export { Stacked };
