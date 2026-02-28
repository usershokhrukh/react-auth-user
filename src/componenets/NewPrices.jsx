import React, { useState } from "react";
import "../assets/style/new-Prices.scss";
import boxesImg from "../assets/images/boxes-img.png";
import Render from "./Render";
const NewPrices = () => {
  try {
    const [status, setStatus] = useState({
      location: "newPrices",
      amount: 8
    })
    return (
      <div className="newPrices container">
        <div className="newPrices__top">
          <div className="newPrices__left">
            <h2 className="newPrices__title">Yangi chegirmalar</h2>
            <div className="newPrices__time-box">
              <div className="newPrices__times">
                <p className="newPrices__time-t">Days</p>
                <h3 className="newPrices__time-main">03</h3>
              </div>
              <span className="newPrices__time-sp">:</span>
              <div className="newPrices__times">
                <p className="newPrices__time-t">Days</p>
                <h3 className="newPrices__time-main">03</h3>
              </div>
              <span className="newPrices__time-sp">:</span>
              <div className="newPrices__times">
                <p className="newPrices__time-t">Days</p>
                <h3 className="newPrices__time-main">03</h3>
              </div>
              <span className="newPrices__time-sp">:</span>
              <div className="newPrices__times">
                <p className="newPrices__time-t">Days</p>
                <h3 className="newPrices__time-main">03</h3>
              </div>
            </div>
          </div>
          <div className="newPrices__right">
            <span className="newPrices__span">
              <svg
                className="newPrices__svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
              </svg>
            </span>
            <span className="newPrices__span">
              <svg
                className="newPrices__svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="newPrices__bottom">
          <div className="newPrices__boxes">
            <div className="newPrices__boxes-top">
              <div className="newPrices__boxes-top-box">
                <p className="newPrices__top-box-sale">-35%</p>
                <div className="newPrices__top-box-right">
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8.81056L13.6352 6.48845C14.2721 5.58412 15.3179 5 16.5 5C18.433 5 20 6.567 20 8.5C20 11.3788 18.0407 14.1215 15.643 16.3358C14.4877 17.4027 13.3237 18.2603 12.4451 18.8521C12.2861 18.9592 12.1371 19.0571 11.9999 19.1456C11.8627 19.0571 11.7137 18.9592 11.5547 18.8521C10.6761 18.2604 9.51216 17.4028 8.35685 16.3358C5.95926 14.1216 4 11.3788 4 8.5C4 6.567 5.567 5 7.5 5C8.68209 5 9.72794 5.58412 10.3648 6.48845L12 8.81056ZM10.5557 3.92626C9.68172 3.3412 8.63071 3 7.5 3C4.46243 3 2 5.46243 2 8.5C2 16 11.9999 21.4852 11.9999 21.4852C11.9999 21.4852 22 16 22 8.5C22 5.46243 19.5376 3 16.5 3C15.3693 3 14.3183 3.3412 13.4443 3.92626C12.8805 4.3037 12.3903 4.78263 12 5.33692C11.6097 4.78263 11.1195 4.3037 10.5557 3.92626Z"></path>
                  </svg>
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                </div>
              </div>
              <img className="newPrices__boxes-img" src={boxesImg} alt="" />
            </div>
            <div className="newPrices__boxes-bottom">
              <p className="newPrices__boxes-title">HAVIT HV-G92 Gamepad</p>
              <div className="newPrices__boxes-price-box">
                <span className="newPrices__boxes-prices">
                  <p className="newPrices__boxes-origin-price">$120</p>
                  <p className="newPrices__boxes-origin-price newPrices__boxes-origin-price-del">
                    $160
                  </p>
                </span>
                <button className="newPrices__boxes-button">
                  Buyurtma berish
                </button>
              </div>
            </div>
          </div>
          <div className="newPrices__boxes">
            <div className="newPrices__boxes-top">
              <div className="newPrices__boxes-top-box">
                <p className="newPrices__top-box-sale">-35%</p>
                <div className="newPrices__top-box-right">
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8.81056L13.6352 6.48845C14.2721 5.58412 15.3179 5 16.5 5C18.433 5 20 6.567 20 8.5C20 11.3788 18.0407 14.1215 15.643 16.3358C14.4877 17.4027 13.3237 18.2603 12.4451 18.8521C12.2861 18.9592 12.1371 19.0571 11.9999 19.1456C11.8627 19.0571 11.7137 18.9592 11.5547 18.8521C10.6761 18.2604 9.51216 17.4028 8.35685 16.3358C5.95926 14.1216 4 11.3788 4 8.5C4 6.567 5.567 5 7.5 5C8.68209 5 9.72794 5.58412 10.3648 6.48845L12 8.81056ZM10.5557 3.92626C9.68172 3.3412 8.63071 3 7.5 3C4.46243 3 2 5.46243 2 8.5C2 16 11.9999 21.4852 11.9999 21.4852C11.9999 21.4852 22 16 22 8.5C22 5.46243 19.5376 3 16.5 3C15.3693 3 14.3183 3.3412 13.4443 3.92626C12.8805 4.3037 12.3903 4.78263 12 5.33692C11.6097 4.78263 11.1195 4.3037 10.5557 3.92626Z"></path>
                  </svg>
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                </div>
              </div>
              <img className="newPrices__boxes-img" src={boxesImg} alt="" />
            </div>
            <div className="newPrices__boxes-bottom">
              <p className="newPrices__boxes-title">HAVIT HV-G92 Gamepad</p>
              <div className="newPrices__boxes-price-box">
                <span className="newPrices__boxes-prices">
                  <p className="newPrices__boxes-origin-price">$120</p>
                  <p className="newPrices__boxes-origin-price newPrices__boxes-origin-price-del">
                    $160
                  </p>
                </span>
                <button className="newPrices__boxes-button">
                  Buyurtma berish
                </button>
              </div>
            </div>
          </div>
          <div className="newPrices__boxes">
            <div className="newPrices__boxes-top">
              <div className="newPrices__boxes-top-box">
                <p className="newPrices__top-box-sale">-35%</p>
                <div className="newPrices__top-box-right">
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8.81056L13.6352 6.48845C14.2721 5.58412 15.3179 5 16.5 5C18.433 5 20 6.567 20 8.5C20 11.3788 18.0407 14.1215 15.643 16.3358C14.4877 17.4027 13.3237 18.2603 12.4451 18.8521C12.2861 18.9592 12.1371 19.0571 11.9999 19.1456C11.8627 19.0571 11.7137 18.9592 11.5547 18.8521C10.6761 18.2604 9.51216 17.4028 8.35685 16.3358C5.95926 14.1216 4 11.3788 4 8.5C4 6.567 5.567 5 7.5 5C8.68209 5 9.72794 5.58412 10.3648 6.48845L12 8.81056ZM10.5557 3.92626C9.68172 3.3412 8.63071 3 7.5 3C4.46243 3 2 5.46243 2 8.5C2 16 11.9999 21.4852 11.9999 21.4852C11.9999 21.4852 22 16 22 8.5C22 5.46243 19.5376 3 16.5 3C15.3693 3 14.3183 3.3412 13.4443 3.92626C12.8805 4.3037 12.3903 4.78263 12 5.33692C11.6097 4.78263 11.1195 4.3037 10.5557 3.92626Z"></path>
                  </svg>
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                </div>
              </div>
              <img className="newPrices__boxes-img" src={boxesImg} alt="" />
            </div>
            <div className="newPrices__boxes-bottom">
              <p className="newPrices__boxes-title">HAVIT HV-G92 Gamepad</p>
              <div className="newPrices__boxes-price-box">
                <span className="newPrices__boxes-prices">
                  <p className="newPrices__boxes-origin-price">$120</p>
                  <p className="newPrices__boxes-origin-price newPrices__boxes-origin-price-del">
                    $160
                  </p>
                </span>
                <button className="newPrices__boxes-button">
                  Buyurtma berish
                </button>
              </div>
            </div>
          </div>
          <div className="newPrices__boxes">
            <div className="newPrices__boxes-top">
              <div className="newPrices__boxes-top-box">
                <p className="newPrices__top-box-sale">-35%</p>
                <div className="newPrices__top-box-right">
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8.81056L13.6352 6.48845C14.2721 5.58412 15.3179 5 16.5 5C18.433 5 20 6.567 20 8.5C20 11.3788 18.0407 14.1215 15.643 16.3358C14.4877 17.4027 13.3237 18.2603 12.4451 18.8521C12.2861 18.9592 12.1371 19.0571 11.9999 19.1456C11.8627 19.0571 11.7137 18.9592 11.5547 18.8521C10.6761 18.2604 9.51216 17.4028 8.35685 16.3358C5.95926 14.1216 4 11.3788 4 8.5C4 6.567 5.567 5 7.5 5C8.68209 5 9.72794 5.58412 10.3648 6.48845L12 8.81056ZM10.5557 3.92626C9.68172 3.3412 8.63071 3 7.5 3C4.46243 3 2 5.46243 2 8.5C2 16 11.9999 21.4852 11.9999 21.4852C11.9999 21.4852 22 16 22 8.5C22 5.46243 19.5376 3 16.5 3C15.3693 3 14.3183 3.3412 13.4443 3.92626C12.8805 4.3037 12.3903 4.78263 12 5.33692C11.6097 4.78263 11.1195 4.3037 10.5557 3.92626Z"></path>
                  </svg>
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                </div>
              </div>
              <img className="newPrices__boxes-img" src={boxesImg} alt="" />
            </div>
            <div className="newPrices__boxes-bottom">
              <p className="newPrices__boxes-title">HAVIT HV-G92 Gamepad</p>
              <div className="newPrices__boxes-price-box">
                <span className="newPrices__boxes-prices">
                  <p className="newPrices__boxes-origin-price">$120</p>
                  <p className="newPrices__boxes-origin-price newPrices__boxes-origin-price-del">
                    $160
                  </p>
                </span>
                <button className="newPrices__boxes-button">
                  Buyurtma berish
                </button>
              </div>
            </div>
          </div>
          <div className="newPrices__boxes">
            <div className="newPrices__boxes-top">
              <div className="newPrices__boxes-top-box">
                <p className="newPrices__top-box-sale">-35%</p>
                <div className="newPrices__top-box-right">
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8.81056L13.6352 6.48845C14.2721 5.58412 15.3179 5 16.5 5C18.433 5 20 6.567 20 8.5C20 11.3788 18.0407 14.1215 15.643 16.3358C14.4877 17.4027 13.3237 18.2603 12.4451 18.8521C12.2861 18.9592 12.1371 19.0571 11.9999 19.1456C11.8627 19.0571 11.7137 18.9592 11.5547 18.8521C10.6761 18.2604 9.51216 17.4028 8.35685 16.3358C5.95926 14.1216 4 11.3788 4 8.5C4 6.567 5.567 5 7.5 5C8.68209 5 9.72794 5.58412 10.3648 6.48845L12 8.81056ZM10.5557 3.92626C9.68172 3.3412 8.63071 3 7.5 3C4.46243 3 2 5.46243 2 8.5C2 16 11.9999 21.4852 11.9999 21.4852C11.9999 21.4852 22 16 22 8.5C22 5.46243 19.5376 3 16.5 3C15.3693 3 14.3183 3.3412 13.4443 3.92626C12.8805 4.3037 12.3903 4.78263 12 5.33692C11.6097 4.78263 11.1195 4.3037 10.5557 3.92626Z"></path>
                  </svg>
                  <svg
                    className="newPrices__top-box-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                </div>
              </div>
              <img className="newPrices__boxes-img" src={boxesImg} alt="" />
            </div>
            <div className="newPrices__boxes-bottom">
              <p className="newPrices__boxes-title">HAVIT HV-G92 Gamepad</p>
              <div className="newPrices__boxes-price-box">
                <span className="newPrices__boxes-prices">
                  <p className="newPrices__boxes-origin-price">$120</p>
                  <p className="newPrices__boxes-origin-price newPrices__boxes-origin-price-del">
                    $160
                  </p>
                </span>
                <button className="newPrices__boxes-button">
                  Buyurtma berish
                </button>
              </div>
            </div>
          </div>
          <Render status={status}/>
        </div>
        <button className="newPrices__bot-button">Barcha ko’rish</button>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default NewPrices;
