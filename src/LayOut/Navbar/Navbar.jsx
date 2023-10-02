import { Link } from "react-router-dom";
import { SiTemporal } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, } = useContext(AuthContext);
  console.log(user);

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
          <Link to="/login">Login</Link>
        </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost   normal-case text-xl">
          <span className="text-2xl">
            <SiTemporal></SiTemporal>
          </span>{" "}
          Authentic Product
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end mr-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {/*  list here */}
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
