import Image from "next/image";
import React from "react";
import style from "../styles/Booking.module.sass";
const BookingHeader = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.header_content_main}>
          <Image src="/main-logo-white.svg" width={50} height={30} alt="none" />
          <div className={style.destination_container}>
            <div className={style.destination}>
              <div>
                <p className={style.destination_top}>From</p>
                <p className={style.destination_mid}>Medan (IDN)</p>
              </div>
              <div className={style.back_and_forth}>
                <Image
                  src="/back_and_forth_white.svg"
                  width={17}
                  height={17}
                  alt="none"
                />
              </div>
              <div>
                <p className={style.destination_top}>To</p>
                <p className={style.destination_mid}>Tokyo (JPN)</p>
              </div>
            </div>
            <div className={style.destination_summary}>
              Monday, 20 July 2022 ○ 6 Passenger ○ Economy
            </div>
          </div>
        </div>
        <div className={style.header_content_secondary}>
          Change search
        </div>
      </div>
    </>
  );
};

export { BookingHeader };
