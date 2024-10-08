import { assets } from "@/assets/assets_frontend/assets";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <secton className="bg-primary px-6 lg:px-12 flex flex-col lg:flex-row items-end lg:h-[80vh] mt-6 rounded-lg">
      <div className="lg:pb-28 text-white flex flex-col gap-6 items-start py-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-snug">
          Book Appointment
          <br />
          With Trusted Doctors
        </h1>
        <div className="flex items-center gap-4">
          <img className="" src={assets.group_profiles} alt="group of people" />
          <p className="text-sm md:text-base">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <Button variant="white">
          <Link className="flex items-center gap-2" to="#speciality">
            Book appointment{" "}
            <img className="w-3" src={assets.arrow_icon} alt="arrow icon" />
          </Link>
        </Button>
      </div>
      <div>
        <img src={assets.header_img} alt="doctors" />
      </div>
    </secton>
  );
};

export default Hero;
