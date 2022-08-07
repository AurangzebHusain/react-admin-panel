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

import { contextMenuItems, customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customers = () => {
  return (
    <div className="mt-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category={"Page"} title={"Customers"}></Header>
      <GridComponent
        allowExcelExport
        dataSource={customersData}
        allowPaging
        allowSorting
        width={"auto"}
        toolbar={["Search", "Delete", "Edit"]}
        editSettings={{ allowEditing: true, allowDeleting: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((el, index) => {
            return <ColumnDirective key={index} {...el} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            Edit,
            Search,
            // Selection,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export { Customers };
