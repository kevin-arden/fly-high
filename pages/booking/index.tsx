import React from "react";
import destinationStyle from "../../styles/Home.module.sass"
import style from "../../styles/Booking.module.sass"
import Image from "next/image";

const Booking = () => {
  return (
    <>
    <div className={style.container}>
      <div className={destinationStyle.destination}>
        <div>
          <p className={destinationStyle.destination_top}>From</p>
          <p className={destinationStyle.destination_mid}>Medan</p>
          <p className={destinationStyle.destination_bot}>Indonesia</p>
        </div>
        <div className={destinationStyle.back_and_forth}>
          <Image src="/back_and_forth.svg" width={17} height={17} alt="none" />
        </div>
        <div>
          <p className={destinationStyle.destination_top}>To</p>
          <p className={destinationStyle.destination_mid}>Tokyo</p>
          <p className={destinationStyle.destination_bot}>Japan</p>
        </div>
      </div>
    </div>
    <div>
      =
    </div>
    </>
  );
};

export default Booking;
