import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <section className="my-20 flex flex-col items-center gap-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
        Top Doctors to Book
      </h2>
      <p className="text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-8">
        {doctors.slice(0, 10).map((doctor, index) => (
          <Link
            to={"/appointmen/:docId"}
            key={index}
            className="border-blue-100 border rounded-lg hover:translate-y-[-10px] transition-all duration-500 cursor-pointer"
          >
            <img
              className="bg-blue-100 rounded-t-lg"
              src={doctor.image}
              alt="doctor image"
            />
            <div className="p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="h-4 w-4 bg-green-400 rounded-full border-2 border-white"></p>
                <p className="text-sm">Available</p>
              </div>
              <p className="font-bold">{doctor.name}</p>
              <p>{doctor.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
      <div
        onClick={() => navigate("/doctors")}
        className="flex w-full justify-center mt-12"
      >
        <Button>more</Button>
      </div>
    </section>
  );
};

export default TopDoctors;
