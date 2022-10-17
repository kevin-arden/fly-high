import React from "react";
import style from "../../styles/Booking.module.sass";
import { BookingHeader } from "../../components/BookingHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";


const Booking = () => {
  return (
    <>
      <BookingHeader />
      <div className={style.header_main}>
        <div className={style.filter}>
          <h3>Filter</h3>
          <button>Reset</button>
        </div>
        <div className={style.sort}>
          <div className={style.left}>
            <h3>Select Ticket</h3>
            <p>(6 flight found)</p>
          </div>
          <button>
            Sort by <FontAwesomeIcon icon={faSort} />
          </button>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.left}>
          
        </div>
        <div className={style.right}></div>
      </div>
    </>
  );
};

export default Booking;
