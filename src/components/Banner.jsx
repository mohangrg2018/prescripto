import { assets } from "@/assets/assets_frontend/assets";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className="flex my-28 items-end px-5 lg:px-12 py-14 lg:py-0 lg:pt-20 bg-primary rounded-lg relative">
      <div className="flex flex-col gap-8 items-start lg:pb-28">
        <h2 className="text-3xl md:text-[38px] font-bold lg:leading-snug text-white">
          Book Appointment
          <br /> With 100+ Trusted Doctors
        </h2>
        <Button variant="white">Create account</Button>
      </div>
      <div className="hidden lg:flex justify-center absolute right-0">
        <img
          className="w-[60%]"
          src={assets.appointment_img}
          alt="doctor appointment"
        />
      </div>
    </section>
  );
};

export default Banner;
