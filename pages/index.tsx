import type { NextPage } from 'next'
import Image from 'next/image'
import style from "../styles/Home.module.sass"

const Home: NextPage = () => {
  return (
    <div className={style.container}>
    <div className={style.section_1}>
      <Image src="/main-right.png" width={400} height={500} alt="none"/>
    </div>
    <div className={style.section_2}>
      <Image src="/main-left.png" width={800} height={500} alt="none"/>
    </div>
    <div className={style.hero_text}>
      Find your <span className={style.blue}>Flight</span>
    </div>
    </div>
  )
}

export default Home
