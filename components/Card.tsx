import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../styles/Card.module.sass";

interface props{
  city: string,
  country: string
}

const Card = ({city, country}: props) => {
  return (
    <div className={style.container}>
      <div className={style.container_image}>
        <Image
          src="/main-left.png"
          width={190}
          height={175}
          alt="none"
          className={style.image}
        />
      </div>
      <div className={style.container_secondary}>
        <div>
          <span className={style.city}>{city},</span>
          <br />
          <span className={style.country}>{country}</span>
        </div>
        <div className={style.container_button}>
          <Link href="/tickets" className={style.button}>
            <Image src="/btnback.svg" width={15} height={15} alt="none" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Card };
