import { assets } from "@/assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState(true);
  return (
    <header className="h-[70px] flex justify-between items-center border-b">
      <div>
        <NavLink to="/">
          <img className="w-48" src={assets.logo} alt="logo" />
        </NavLink>
      </div>
      <ul className="active-navmenu uppercase text-md font-semibold hidden lg:flex items-center gap-10">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">All Doctors</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">about</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">contact</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary" />
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer relative group">
            <img
              className="w-10 rounded-full"
              src={assets.profile_pic}
              alt="profile pic"
            />
            <img src={assets.dropdown_icon} alt="dropdown arrow" />
            <div className="absolute z-10 capitalize top-0 right-0 pt-16 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 p-4 rounded-md flex flex-col gap-2">
                <p>my profile</p>
                <p>my appointment</p>
                <p>logout</p>
              </div>
            </div>
          </div>
        ) : (
          <Button>Create Account</Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
