import { assets } from "@/assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-14">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="lg:w-[60%] flex flex-col gap-4 lg:gap-6">
          <img className="w-[250px]" src={assets.logo} alt="logo" />
          <p className="lg:w-3/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="lg:w-[20%] flex flex-col gap-4 lg:gap-6">
          <h3 className="uppercase text-2xl font-medium">company</h3>
          <ul className="capitalize text-sm flex flex-col gap-2 lg:gap-4">
            <Link>
              <li>home</li>
            </Link>
            <Link>
              <li>about us</li>
            </Link>
            <Link>
              <li>delivery</li>
            </Link>
            <Link>
              <li>privacy policy</li>
            </Link>
          </ul>
        </div>
        <div className="lg:w-[20%] flex flex-col gap-4 lg:gap-6">
          <h3 className="uppercase text-2xl font-medium">get in touch</h3>
          <ul className="capitalize text-sm flex flex-col gap-2 lg:gap-4">
            <Link>
              <li>+0-000-000-000</li>
            </Link>
            <Link>
              <li>greatstackdev@gmail.com</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="py-5 border-t">
        <p className="text-sm text-center">
          Copyright 2024 @ Greatstack.dev - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
