import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useServices from "../../Hookes/useServices";

const Services = () => {

  const services = useServices()

  return (
    <div>
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-red-500">Service</h1>
        <h1 className="text-4xl font-bold ">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don t look even slightly believable.{" "}
        </p>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="card card-compact bg-base-100 shadow-x "
            >
              <figure>
                <img
                  className="rounded-lg w-full md:h-[250px]"
                  src={service.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body space-y-4">
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <div className="card-actions justify-end items-center">
                  <p className="font-bold text-red-500">
                    {" "}
                    Price{service.price}
                  </p>
                  <Link to={`checkout/${service._id}`}>
                    <button className="btn btn-outline bg-red-500 text-white">
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
