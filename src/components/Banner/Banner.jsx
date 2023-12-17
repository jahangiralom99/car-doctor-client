import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="mt-6">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full ">
          <div
            className="hero md:h-[600px] place-items-start rounded-xl"
            style={{ backgroundImage: `url(${img5})` }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl"></div>
            <div className=" text-neutral-content md:mt-[20%]">
              <div className="p-12 ">
                <h1 className="mb-5 text-5xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="mb-5">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-2 ">
                  <button className="btn btn-error hover:bg-red-600">Discover More</button>
                  <button className="btn btn-outline text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 bottom-0 right-0 md:mr-10">
            <a
              href="#slide4"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <div
            className="hero md:h-[600px] place-items-start rounded-xl"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl"></div>
            <div className=" text-neutral-content md:mt-[20%]">
              <div className="p-12 ">
                <h1 className="mb-5 text-5xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="mb-5">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-2">
                  <button className="btn btn-error hover:bg-red-600">Discover More</button>
                  <button className="btn btn-outline text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 bottom-0 right-0 mr-10">
            <a
              href="#slide1"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <div
            className="hero md:h-[600px] place-items-start rounded-xl"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl"></div>
            <div className=" text-neutral-content md:mt-[20%]">
              <div className="p-12 ">
                <h1 className="mb-5 text-5xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="mb-5">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-2">
                  <button className="btn btn-error hover:bg-red-600">Discover More</button>
                  <button className="btn btn-outline text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 bottom-0 right-0 mr-10">
            <a
              href="#slide2"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full ">
          <div
            className="hero md:h-[600px] place-items-start rounded-xl"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl"></div>
            <div className=" text-neutral-content md:mt-[20%]">
              <div className="p-12 ">
                <h1 className="mb-5 text-5xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="mb-5">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-2">
                  <button className="btn btn-error hover:bg-red-600">Discover More</button>
                  <button className="btn btn-outline text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 bottom-0 right-0 mr-10">
            <a
              href="#slide3"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full ">
          <div
            className="hero md:h-[600px] place-items-start rounded-xl"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl"></div>
            <div className=" text-neutral-content md:mt-[20%]">
              <div className="p-12 ">
                <h1 className="mb-5 text-5xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="mb-5">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-2">
                  <button className="btn btn-error hover:bg-red-600">Discover More</button>
                  <button className="btn btn-outline text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 bottom-0 right-0 mr-10">
            <a
              href="#slide4"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full ">
          <div
            className="hero md:h-[600px] place-items-start rounded-xl"
            style={{ backgroundImage: `url(${img6})` }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl"></div>
            <div className=" text-neutral-content md:mt-[20%]">
              <div className="p-12 ">
                <h1 className="mb-5 text-5xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="mb-5">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-2">
                  <button className="btn btn-error hover:bg-red-600">Discover More</button>
                  <button className="btn btn-outline text-white font-bold">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 bottom-0 right-0 mr-10">
            <a
              href="#slide5"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle btn-outline bg-red-600 text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
