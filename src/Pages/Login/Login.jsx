import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import useAuth from "../../Hookes/useAuth";

const Login = () => {
  const {loginUser } =useAuth()
  // const { } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        toast.success("user Create successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // get Access Token
        const user = { email };
        axios.post('http://localhost:3000/jwt', user, {withCredentials: true})
          .then(res => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
            }
        })
       
      })
      .catch((err) => {
        const message = err.code;
        // console.log(message);
        toast.error(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card  lg:w-1/2 w-full shadow-sm bg-base-100">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn w-full bg-[#FF3811] hover:bg-red-700 font-bold text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div>
              <p className="text-center font-bold">Or Sign in With</p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <FaGoogle className="text-red-600 text-2xl " />
                <FaLinkedin className="text-2xl"></FaLinkedin>
                <FaFacebook className="text-2xl text-[#3B5998]"></FaFacebook>
              </div>
              <p className="text-center mt-6 pb-4">
                New to car Doctor?{" "}
                <Link to="/signUp" className="font-bold text-red-600">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
