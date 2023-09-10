import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg h-[80px] ml-[20px]">
      <div className="logo-container">
        <img className="w-[80px] h-[80px]" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlineStatus ? "Online" : "Offline"}</li>
          <li className="px-4 hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
