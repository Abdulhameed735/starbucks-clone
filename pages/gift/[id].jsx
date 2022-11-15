import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from '../../components/NavBar';
import styles from '../../styles/ID.module.css';
import { left } from "../../assets";
import Image from "next/image";
import Link from "next/link";

const Create = () => {
  const router = useRouter();
  const ID = router.query.id;
  const IMGSRC = router.query.imgSrc;

  return (
    <div>
        <Head>
            <title>Starbucks Gift Card: Youre Going Places FY23: Starbucks Coffee Company</title>
            <link href="https://starbucks.com/next_static/icons/favicon-16x16.png" rel="icon"></link>
            <link href="https://starbucks.com/next_static/icons/favicon-32x32.png" rel="icon"></link>
            <link href="https://starbucks.com/next_static/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"></link>
            <link href="https://starbucks.com/next_static/icons/pwa-icon-192.png" rel="icon" sizes="192x192" type="image/png"></link>
            <link color="#008046" href="https://starbucks.com/next_static/icons/safari-pinned-tab.svg" rel="mask-icon"></link>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.main__sec__one}>
          <Link href='/gift'>
            <h2>
              <Image src={left} alt='icon' />
              <span>Gift Cards</span>
            </h2>
            <h1>Create Gift Card</h1>
          </Link>
        </div>

        <div>
          <div>
            <Image src={IMGSRC} alt='gift-card' width={260} height={170} quality={100}/>
          </div>
        </div>
      </main>
      

    </div>
  )
}

export default Create