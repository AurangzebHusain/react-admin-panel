import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";
import { FiSettings } from "react-icons/fi";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Routes, Route } from "react-router-dom";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
} from "./pages";
import { Navbar, Sidebar, Stacked, ThemeSettings } from "./components";
import { StateContext } from "./contexts/contextProvider";
function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor } =
    useContext(StateContext);

  return (
    <div className="App">
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="settings" position="TopCenter">
            <button
              type="button"
              className="text-3xl p-3 hov er:drop-shadow-xl hover:bg-light-grey text-white"
              style={{ backgroundColor: currentColor, borderRadius: "50% " }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings></FiSettings>
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg ">
            {" "}
            <Sidebar />
          </div>
        )}

        <div
          className={`dark:bg-main-bg bg-main-bg  min-h-screen ${
            activeMenu ? "md:ml-72" : ""
          } w-full`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />

            <div>
              {themeSettings && <ThemeSettings></ThemeSettings>}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />}></Route>
                <Route path="/ecommerce" element={<Ecommerce />}></Route>
                {/* Pages */}
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/employees" element={<Employees />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                {/* Apps */}
                <Route path="/kanban" element={<Kanban />}></Route>
                <Route path="/editor" element={<Editor />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/color-picker" element={<ColorPicker />}></Route>
                {/* Charts */}

                <Route path="/line" element={<Line />}></Route>
                <Route path="/area" element={<Area />}></Route>
                <Route path="/bar" element={<Bar />}></Route>
                <Route path="/pie" element={<Pie />}></Route>
                <Route path="/financial" element={<Financial />}></Route>
                <Route path="/color-mapping" element={<ColorMapping />}></Route>
                <Route path="/Pyramid" element={<Pyramid />}></Route>
                <Route path="/stacked" element={<Stacked />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
