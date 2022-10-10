import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Home.module.sass";
import Button from "../components/Button";

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
            Hey, <br />
            <br /> Where you want to go?
          </div>
          <br />
          <Link href={"/tickets"}>
            <div className={`${style.blue} ${style.link}`}>
              <p>Recently Searched</p>
              <Image src="/btnback.svg" width={10} height={10} alt="none" />
            </div>
          </Link>
          <br />
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
            <Button classNames="primary">Search flight</Button>
            <div className={style.space} />
            <Button classNames="secondary">Round Trip</Button>
          </div>
          <div>
            <p>Departure</p>
            <br />
            <div
              onClick={() => console.log("test")}
              className={style.picker_button}
            >
              Monday, 10 August 2020{" "}
              <Image src="/btnback.svg" width={10} height={10} alt="none" />
            </div>
          </div>
          <br />
          <div>
            <p>How many person?</p>
            <br />
            <div className={style.button_container}>
              <div className={style.picker_button}>
                <p>2 Adults</p>
                <Image src="/btnback.svg" width={10} height={10} alt="none" />
              </div>
              <div className={style.space} />
              <div className={style.picker_button}>
                <p>1 Children</p>
                <Image src="/btnback.svg" width={10} height={10} alt="none" />
              </div>
            </div>
          </div>
          <div>
            <p>Which class do you want?</p>
            <br />
            <input type="radio" id="economy" />
            <label htmlFor="economy">Economy</label>
            <input type="radio" id="business" />
            <label htmlFor="business">Business</label>
            <input type="radio" id="firstClass" />
            <label htmlFor="firstClass">First Class</label>
            <br />
          </div>
          <br />
          <div>
            <Button classNames="primary">Search flight</Button>
          </div>
        </div>
      </div>

      <div className={style.sec_container}>
        Trending
        <br />
        Trending destinations
      </div>
    </div>
  );
};

export default Home;
