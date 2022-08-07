import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
const SparkLine = ({
  color,
  currentColor,
  id,
  type,
  height,
  width,
  data,
}: {
  color: any;
  currentColor: any;
  id: any;
  type: any;
  height: any;
  width: any;
  data: any;
}) => {
  return (
    <SparklineComponent
      id={id}
      width={width}
      height={height}
      lineWidth={1}
      valueType={"Numeric"}
      fill={color}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "$x:data $y",
        trackLineSettings: { visible: true },
      }}
      border={{ color: currentColor, width: 2 }}
    >
      <Inject services={[SparklineTooltip]}></Inject>
    </SparklineComponent>
  );
};

export { SparkLine };
