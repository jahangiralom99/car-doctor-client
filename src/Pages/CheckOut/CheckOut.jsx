import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import SharedBanner from "../Shared/SharedBanner/SharedBanner";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { price, _id, img, title } = service;
  const location = useLocation();
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.amount.value;
    const order = {
      customerName: name,
      email,
      img,
      date,
      title,
      service_id: _id,
      price,
    };

    console.log(order);
    axios
      .post("https://car-doctor-server-one-virid.vercel.app/orders", order)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Order confirm!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate(location?.state ? location?.state : "/");
        }
      });
    // console.log(name, date, email, price);
  };

  return (
    <div className="mt-6">
      <SharedBanner></SharedBanner>
      <div className="mt-6">
        <h1 className="text-5xl font-bold text-center">Check Out</h1>
        <h2 className="text-3xl font-bold text-center mt-12">Name: {title}</h2>
        <form onSubmit={handleCheckout}>
          <div className="card-body grid md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user ? user?.displayName : ""}
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user ? user?.email : ""}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="amount"
                defaultValue={`$ ${price}`}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <input
            className="btn btn-block bg-red-500 font-bold text-white hover:bg-red-600"
            type="submit"
            value="Order Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
