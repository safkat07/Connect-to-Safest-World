import { Link } from "react-router-dom";


const Banner = () => {
    return (

<div>
<div className="hero  w-[1400px] min-h-[80vh]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
  <div className="max-w-fit">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Authentic Product House</h1>
      <p className="mb-5">We Provide Herer Valuable Product Within Limited Amount of Money.</p>
      <Link to="/login"><button className="btn btn-ghost">Login Now</button></Link>
    </div>
  </div>
</div>
</div>

    );
};

export default Banner;