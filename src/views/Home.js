import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/image/image4.png";
import backgroundImage2 from "../assets/image/image5.png";
import btnback from "../assets/logo/btnback.png";
import transfer1 from "../assets/logo/transfer1.png";
import planeLogo from "../assets/logo/plane-white.png";
import restartLogo from "../assets/logo/return.png";
import "./Home.css";
const Home = () => {
  const history = useNavigate();
  return (
    <div className="container main-menu">
      <div className="row">
        <div className="col left-col">
          <p className="main-text">
            Find your <span className="blue-text">Flight</span>
          </p>
          <p className="secondary-text">and explore the world with us</p>
        </div>
        <div className="col">
          <div className="flight-search-menu">
            <p>Hey,</p>
            <p className="bigger-text">Where you want to go</p>
            <button className="menu-button top-10 flex-between">
              <span className="blue-text">Recenly searched</span>{" "}
              <img className="arrow-right" src={btnback} alt="" />
            </button>
            <div className="destinations flex-between">
              <div className="from">
                <p className="small-text">From</p>
                <p className="second">Medan</p>
                <p className="small-text black-text">Indonesia</p>
              </div>
              <div className="arrow">
                <img src={transfer1} alt="" />
              </div>
              <div className="to">
                <p className="small-text">To</p>
                <p className="second">Tokyo</p>
                <p className="small-text black-text">Japan</p>
              </div>
            </div>
            <div className="button-options flex-between">
              <button className="button half main-btn flex-between">
                <img src={planeLogo} alt="" />
                One Way
              </button>
              <button className="button half secondary-btn">
                <img src={restartLogo} alt="" /> Round Trip
              </button>
            </div>
            <div className="top-10">
              <p className="select-menu-label">Departure</p>
              <button className="popup-button flex-between full">
                <span className="button-label"> Monday, 20 July 2020 </span>
                <img src={btnback} alt="" />
              </button>
            </div>
            <div className="top-10">
              <p className="select-menu-label">How Many Person</p>
              <div className="flex-between">
                <button className="popup-button flex-between half">
                  <span className="button-label">2 Child</span>
                  <img src={btnback} alt="" />
                </button>
                <button className="popup-button flex-between half">
                  <span className="button-label">4 Adult</span>{" "}
                  <img src={btnback} alt="" />
                </button>
              </div>
            </div>
            <div className="top-10">
              <p className="select-menu-label">Which class do you want ?</p>
              <div className="flex-between">
                <div className="item">
                  <input type="radio" id="economy" value="economy" /> Economy
                </div>
                <div className="item">
                  <input type="radio" id="business" value="business" />
                  <label for="business">Business</label>
                </div>
                <div className="item">
                  <input type="radio" id="firstClass" value="firstClass" />
                  <label for="firstClass">First Class</label>
                </div>
              </div>
            </div>
            <div className="top-10">
              <button className="button main-button">Search Flight</button>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <img className="bg-image left-bg" src={backgroundImage} alt="" />
        <img className="bg-image right-bg" src={backgroundImage2} alt="" />
      </div>
    </div>
  );
};

export default Home;
