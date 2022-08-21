import React from "react";
import { Header, AreaChart } from "../../components";

const Area = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg roundel-3xl">
      <Header title="Inflation Rate in Percentage " category={"Area"} />
      <AreaChart />
    </div>
  );
};

export { Area };
