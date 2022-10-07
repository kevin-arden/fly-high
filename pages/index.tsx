import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Home.module.sass";

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <div className={style.section_1}>
        <Image src="/main-right.png" width={400} height={500} alt="none" />
      </div>
      <div className={style.section_2}>
        <Image src="/main-left.png" width={800} height={500} alt="none" />
      </div>
      <div className={style.main_container}>
        <div className={style.hero_container}>
          <p className={style.hero_text}>
            Find your <span className={style.blue}>Flight</span>
          </p>
          <p className={style.hero_secondary}>and explore the world with us</p>
        </div>
        <div className={style.ticket_card}>
          <div>
            Hey, <br /> Where you want to go?
          </div>
          <Link href={"/tickets"}>
            <p className={`${style.blue} ${style.link}`}>
              Recently Searched{" "}
              <Image src="/btnback.svg" width={10} height={10} alt="none" />
            </p>
          </Link>
          <div className={style.destination}>
            <div>
              <p className={style.destination_top}>From</p>
              <p className={style.destination_mid}>Medan</p>
              <p className={style.destination_bot}>Indonesia</p>
            </div>
            <div className={style.back_and_forth}>
              <Image
                src="/back_and_forth.svg"
                width={17}
                height={17}
                alt="none"
              />
            </div>
            <div>
              <p className={style.destination_top}>To</p>
              <p className={style.destination_mid}>Tokyo</p>
              <p className={style.destination_bot}>Japan</p>
            </div>
          </div>
          <div className={style.button_container}>
            <button className={`${style.button} ${style.button_main}`}>
              One way
            </button>
            <button className={`${style.button} ${style.button_secondary}`}>
              Round Trip
            </button>
          </div>
          <div>
            <p>Destination</p>
            <div>
              Monday, 10 August 2020{" "}
              <Image src="/btnback.svg" width={10} height={10} alt="none" />
            </div>
          </div>
          <div>
            <p>How many person?</p>
            <div>
              2 Adults{" "}
              <Image src="/btnback.svg" width={10} height={10} alt="none" />
            </div>
            <div>
              1 Children{" "}
              <Image src="/btnback.svg" width={10} height={10} alt="none" />
            </div>
          </div>
          <div>
            Which class do you want?
            <br/>
            <input type="radio" id="economy" />
            <label htmlFor="economy">Economy</label>
            <input type="radio" id="business" />
            <label htmlFor="business">Business</label>
            <input type="radio" id="firstClass" />
            <label htmlFor="firstClass">First Class</label>
            <br />
          </div>
          <div>
            <button>Search flight</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
