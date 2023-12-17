import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const NavBar = () => {
  const { user ,logOut} = useContext(AuthContext);

  const loggerEmail = {email: user?.email}
  const handleLogOut = () => {
    logOut()
      .then(() => {
        axios.post('http://localhost:3000/logout', loggerEmail,{ withCredentials: true, })
          .then(res => {
          console.log(res.data);
        })
        toast.info('user logged out successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })
      .catch(err => {
        console.log(err);
      })
  }

  const navBarALl = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarALl}
          </ul>
        </div>
        <Link className="">
          <img className="w-[80%]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarALl}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <div className="flex items-center justify-center gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Settings</a>
                </li>
                <button onClick={handleLogOut} className="btn btn-outline  text-red-500">logOut</button>
              </ul>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <div className="hidden md:block">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                >
                  <path
                    d="M13.75 9.5V5C13.75 4.00544 13.3549 3.05161 12.6516 2.34835C11.9484 1.64509 10.9945 1.25 9.99998 1.25C9.00542 1.25 8.0516 1.64509 7.34833 2.34835C6.64507 3.05161 6.24998 4.00544 6.24998 5V9.5M17.606 7.507L18.869 19.507C18.939 20.172 18.419 20.75 17.75 20.75H2.24998C2.09219 20.7502 1.93613 20.7171 1.79193 20.6531C1.64774 20.589 1.51863 20.4953 1.41301 20.3781C1.30738 20.2608 1.2276 20.1227 1.17884 19.9726C1.13008 19.8226 1.11343 19.6639 1.12999 19.507L2.39399 7.507C2.42314 7.23056 2.55361 6.9747 2.76024 6.78876C2.96686 6.60281 3.23501 6.49995 3.51298 6.5H16.487C17.063 6.5 17.546 6.935 17.606 7.507ZM6.62498 9.5C6.62498 9.59946 6.58548 9.69484 6.51515 9.76517C6.44482 9.83549 6.34944 9.875 6.24998 9.875C6.15053 9.875 6.05515 9.83549 5.98482 9.76517C5.91449 9.69484 5.87498 9.59946 5.87498 9.5C5.87498 9.40054 5.91449 9.30516 5.98482 9.23483C6.05515 9.16451 6.15053 9.125 6.24998 9.125C6.34944 9.125 6.44482 9.16451 6.51515 9.23483C6.58548 9.30516 6.62498 9.40054 6.62498 9.5V9.5ZM14.125 9.5C14.125 9.59946 14.0855 9.69484 14.0152 9.76517C13.9448 9.83549 13.8494 9.875 13.75 9.875C13.6505 9.875 13.5551 9.83549 13.4848 9.76517C13.4145 9.69484 13.375 9.59946 13.375 9.5C13.375 9.40054 13.4145 9.30516 13.4848 9.23483C13.5551 9.16451 13.6505 9.125 13.75 9.125C13.8494 9.125 13.9448 9.16451 14.0152 9.23483C14.0855 9.30516 14.125 9.40054 14.125 9.5V9.5Z"
                    stroke="#444444"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
        <div className=" hidden md:block">
          <a className="btn btn-outline text-red-500">Appointment</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
