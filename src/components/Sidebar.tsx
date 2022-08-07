import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { StateContext } from "../contexts/contextProvider";

const Sidebar = () => {
  // const activeMenu: boolean = true;
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useContext(StateContext);
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize < 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m2  ";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-grey-700 dark:text-grey-200 dark:hover: text-black hover:bg-light-grey m-2 ";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 mt-4   ml-3 text-xl font-extrabold tracking-tight flex dark:text-white text-slate-900"
            >
              <SiShopware />
              <span>SS</span>
            </Link>
            <TooltipComponent content={"Close Menu"} position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu(() => false);
                }}
                className="text-xl rounded-full p-3 mt-4 hover:bg-light-gray bock"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-100">
            {links.map((item) => (
              <div
                key={item.title}
                className="text-gray-400 m-3 mt-4 uppercase"
              >
                <p>{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    onClick={handleCloseSideBar}
                    to={link.name}
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) => {
                      return isActive ? activeLink : normalLink;
                    }}
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { Sidebar };
