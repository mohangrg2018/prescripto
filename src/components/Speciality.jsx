import { specialityData } from "@/assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Speciality = () => {
  const navigate = useNavigate();

  return (
    <section className="my-20 flex flex-col items-center gap-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
        Find by Speciality
      </h2>
      <p className="text-center">
        Simply browse through our extensive list of trusted doctors,
        <br /> schedule your appointment hassle-free.
      </p>
      <div className="flex items-center lg:justify-center gap-10 w-full overflow-scroll mt-">
        {specialityData.map((item, index) => (
          <div
            onClick={() => navigate(`/doctos/${item.speciality}`)}
            key={index}
            className="flex flex-col items-center gap-3 cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pt-10"
          >
            <img
              className="w-16 lg:w-24"
              src={item.image}
              alt="speciality image"
            />
            <p className="text-xs lg:text-sm">{item.speciality}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speciality;
