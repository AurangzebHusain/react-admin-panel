import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { itemsToOrder } from "@syncfusion/ej2/treemap";
import React, { useContext } from "react";
import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { StateContext } from "../contexts/contextProvider";
import { themeColors } from "../data/dummy";

const ThemeSettings = () => {
  const {
    setColor,
    setMode,
    currentTheme,
    currentMode,
    currentColor,
    setThemeSettings,
  } = useContext(StateContext);
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          >
            <MdOutlineCancel className="text-2xl hover:drop-shadow-xl hover:bg-light-gray" />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-1 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type={"radio"}
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              checked={currentMode === "Light"}
              onChange={setMode}
            ></input>
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type={"radio"}
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              checked={currentMode === "Dark"}
              onChange={setMode}
            ></input>
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-1 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="gap-3 flex">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    onClick={() => {
                      setColor(item.color);
                    }}
                    className="h-10 w-10 cursor-pointer rounded-full"
                    style={{ backgroundColor: item.color }}
                  >
                    <BsCheck
                      className={`ml-2 text-white text-2xl ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ThemeSettings };
