import parson from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="mt-6">
      <div className="md:flex items-center bg-base-100  py-10 shadow-sm">
        <div className="md:w-[50%] relative">
          <figure>
            <img className="w-[80%]" src={parson} alt="Album" />
            <img
              className="w-1/2 border-8 border-white absolute right-0 top-1/2 shadow-xl"
              src={parts}
              alt=""
            />
          </figure>
        </div>
        <div className="card-body md:w-[50%] space-y-4">
          <h3 className="font-bold text-2xl text-red-500">About Us</h3>
          <h2 className="text-4xl font-bold ">
            We are qualified & of experience in this field
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don t look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don t look even slightly
            believable.{" "}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-error hover:bg-red-600 font-bold text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
