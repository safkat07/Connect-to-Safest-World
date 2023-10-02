import { useContext, useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { BiShow, BiHide } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className=" ">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">LOGIN NOW!</h1>
          <p className="pt-6">Login to Enjoy Our Awsome Service</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="absolute card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <SocialLogin></SocialLogin>
          </div>
        </div>
        {showPassword ? (
          <>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="relative mt-[152px] ml-48 "
            >
              <BiShow></BiShow>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="relative mt-[152px] ml-48 "
            >
              <BiHide></BiHide>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
