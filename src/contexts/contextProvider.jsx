import { createContext, useState, useEffect } from "react";
const initialState = {
  chart: false,
  cart: false,
  notification: false,
  userProfile: false,
  activeMenu: true,
};
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setcurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  useEffect(() => {
    const themeMode_storge = localStorage.getItem("themeMode");
    const themeColor_storage = localStorage.getItem("themeColor");
    if (themeColor_storage) {
      setCurrentColor(themeColor_storage);
    }
    if (themeMode_storge) {
      setcurrentMode(themeMode_storge);
    }
  }, []);

  const setMode = (e) => {
    console.log(e.target.value);
    setcurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (e) => {
    console.log(e);
    setCurrentColor(e);
    localStorage.setItem("themeColor", e);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const value = {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    currentMode,
    setColor,
    setMode,
    themeSettings,
    setThemeSettings,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// export const useStateContext = () => useContext(StateContext);
