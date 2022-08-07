import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Resize,
  Search,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, contextMenuItems, employeesGrid } from "../data/dummy";
import { Header } from "../components";
const Employees = () => {
  return (
    <div className="mt-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category={"Page"} title={"Employees"}></Header>
      <GridComponent
        allowExcelExport
        dataSource={employeesData}
        allowPaging
        allowSorting
        width={"auto"}
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((el, index) => {
            return <ColumnDirective key={index} {...el} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Filter, Page, Search, Toolbar]}
        />
      </GridComponent>
    </div>
  );
};

export { Employees };
