import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "../styles/Footer.module.sass";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.column}>
          <Link href="/">
            <div>
              <Image src="/main-logo.svg" height={35} width={50} alt="none" />{" "}
              Fly High
            </div>
          </Link>
          <br />
          <p>
            Find your Flight and explore the world with us. We will take care of
            the rest
          </p>
        </div>
        <div className={style.space} />
        <div className={style.column}>
          <div>Features</div>
          <br />
          <div className={style.column_content}>
            <Link href="/">
              <a className={style.pad}>Find Ticket</a>
            </Link>
            <Link href="/">
              <a className={style.pad}>My Booking</a>
            </Link>
            <Link href="/">
              <a className={style.pad}>Chat</a>
            </Link>
            <Link href="/">
              <a className={style.pad}>Notification</a>
            </Link>
          </div>
        </div>
        <div className={style.space} />
        <div className={style.column}>
          <div>Download Fly High App</div>
          <br />
          <div className={style.column_content}>
            <Link href="/">
              <a className={style.pad}>
                <Image
                  src="/google-play.png"
                  height={50}
                  width={175}
                  alt="none"
                />
              </a>
            </Link>
            <Link href="/">
              <a className={style.pad}>
                <Image
                  src="/apple-store.png"
                  height={50}
                  width={175}
                  alt="none"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={style.space} />
        <div className={style.column}>
          <div>Follow Us</div>
          <br />
          <div>
            <Link href="/">
              <a className={style.pad_url}>
                <Image src="/facebook.svg" height={25} width={25} alt="none" />
              </a>
            </Link>
            <Link href="/">
              <a className={style.pad_url}>
                <Image src="/twitter.svg" height={25} width={25} alt="none" />
              </a>
            </Link>
            <Link href="/">
              <a className={style.pad_url}>
                <Image src="/instagram.svg" height={25} width={25} alt="none" />
              </a>
            </Link>
            <Link href="/">
              <a className={style.pad_url}>
                <Image src="/youtube.svg" height={25} width={25} alt="none" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div>© Ankasa. All Rights Reserved.</div>
        <div>
          <Image src="/map-pin.svg" width={15} height={15} alt="none"/>
           Jakarta Indonesia</div>
      </div>
    </>
  );
};

export { Footer };
