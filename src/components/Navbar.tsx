import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { StateContext } from "../contexts/contextProvider";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "./index";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useContext(StateContext);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < -900) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative ">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu(!activeMenu);
        }}
        color={currentColor}
        dotColor=""
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => {
            handleClick("cart");
          }}
          color={currentColor}
          dotColor=""
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Notifications"
          customFunc={() => {
            handleClick("notification");
          }}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
        />
        <NavButton
          title="Chat"
          customFunc={() => {
            handleClick("chat");
          }}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        <TooltipComponent content={"PRofile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {
              handleClick("userProfile");
            }}
          >
            <img src={avatar} alt="" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 text-14 font-bold ml-1">
                {"Minchean"}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 " />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};
const NavButton = ({
  title,
  color,
  customFunc,
  dotColor,
  icon,
}: {
  title: any;
  color: any;
  customFunc: any;
  dotColor: any;
  icon: any;
}) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color: color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray  flex gap-2  items-center"
      >
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute rounded-full top-2 right-2 w-2 h-2"
        ></span>
        {icon}
        {/* {title} */}
      </button>
    </TooltipComponent>
  );
};

export { Navbar };
