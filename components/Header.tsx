import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from "../styles/Header.module.sass"

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link href="/">
          <div>
            <Image src="/main-logo.svg" height={35} width={50} alt="none" /> Fly
            High
          </div>
        </Link>
      </div>
      <div className={style.link_container}>
        <Link href="/tickets">
          <span className={style.link}>Find Ticket</span>
        </Link>
        <Link className={style.link} href="/booking">
          <span className={style.link}>My Booking</span>
        </Link>
      </div>
      <div>
        <button className={style.button_main}>Sign Up</button>
      </div>
    </div>
  );
}

export { Header}