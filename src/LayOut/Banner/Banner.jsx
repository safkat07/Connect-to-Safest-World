import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Banner = () => {
  const {user,  logOut, loading}= useContext(AuthContext)
 console.log(loading);
    return (

<div>
<div className="hero   lg:w-[1400px] min-h-[80vh]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
  <div className="max-w-fit">
      { 
      
         user? <>
         {
          loading ? <>
          
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>
          </> :
          <h1 className="mb-5 text-5xl font-bold">Welcome Mr {user.displayName} </h1>
         }
         </>
         :

         <>
         {

      loading ?           <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
                :
                <h1 className="mb-5 text-5xl font-bold">Welcome To Authentic Product House</h1>
         }
         </>
      }
      <p className="mb-5">We Provide Herer Valuable Product Within Limited Amount of Money.</p>


      
      {
        user? <>
        <Link><button onClick={logOut} className="btn btn-ghost">LogOut</button></Link>
        </>
        :
        <>
        <Link to="/login"><button className="btn btn-ghost">Login Now</button></Link>
        </>
      }
    </div>
  </div>
</div>
</div>

    );
};

export default Banner;