import "../Hero/Hero.css";
import arrow_icon from "/BuyBuddy/client/src/assets/arrow.png";

import hero from "/BuyBuddy/client/src/assets/heroImg.png";

import hand from "/BuyBuddy/client/src/assets/hand-icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img
            src={arrow_icon}
            alt=""
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero} alt="" style={{ width: "450px", height: "650px" }} />
      </div>
    </div>
  );
};

export default Hero;
