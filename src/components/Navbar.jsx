import { assets } from "@/assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-20 flex items-center justify-between border-b px-4 lg:px-0">
      {/* Logo */}
      <NavLink to="/">
        <img className="w-48" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <ul className="active-navmenu uppercase font-semibold text-sm lg:flex items-center gap-10 hidden">
        <NavLink to={"/"}>
          <li className="py-1">home</li>
        </NavLink>
        <li>
          <NavLink to={"/doctors"}>
            <li className="py-1">all doctors</li>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>
            <li className="py-1">about</li>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>
            <li className="py-1">contact</li>
          </NavLink>
        </li>
      </ul>

      {/* User Profile and Mobile Menu Toggle */}
      {token ? (
        <div className="flex items-center gap-4">
          {/* Profile Dropdown */}
          <div className="flex items-center gap-4 cursor-pointer relative group">
            <img
              className="w-10 rounded-full"
              src={assets.profile_pic}
              alt="profile pic"
            />
            <img src={assets.dropdown_icon} alt="dropdown icon" />
            <div className="absolute top-0 right-0 hidden group-hover:block pt-16">
              <div className="bg-stone-100 min-w-56 flex flex-col gap-2 p-4 rounded-lg">
                <NavLink className="hover:text-primary">My Profile</NavLink>
                <NavLink className="hover:text-primary">My Appointment</NavLink>
                <NavLink className="hover:text-primary">Logout</NavLink>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            {menuOpen ? (
              <img
                onClick={() => setMenuOpen(false)}
                className="w-6 cursor-pointer"
                src={assets.cross_icon}
                alt="menu close icon"
              />
            ) : (
              <img
                onClick={() => setMenuOpen(true)}
                className="w-6 cursor-pointer"
                src={assets.menu_icon}
                alt="menu open icon"
              />
            )}
          </div>
        </div>
      ) : (
        <div>
          <Button>Create Account</Button>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className={`mobile__NavMenu lg:hidden absolute top-20 right-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-lg transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform -translate-y-full"
          }`}
        >
          <NavLink to={"/"}>
            <li className="py-1 hover:text-primary">Home</li>
          </NavLink>
          <NavLink to={"/doctors"}>
            <li className="hover:text-primary">All Doctors</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className="hover:text-primary">About</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li className="hover:text-primary">Contact</li>
          </NavLink>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
