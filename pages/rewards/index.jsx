import Head from 'next/head';
import NavBar from '../../components/NavBar';
import styles from '../../styles/Rewards.module.css';

const Rewards = () => {
  return (
    <div>
        <Head>
            <title>Starbucks® Rewards – Order Ahead, Endless Extras, Free Coffee: Starbucks Coffee Company</title>
            <link href="https://starbucks.com/next_static/icons/favicon-16x16.png" rel="icon"></link>
            <link href="https://starbucks.com/next_static/icons/favicon-32x32.png" rel="icon"></link>
            <link href="https://starbucks.com/next_static/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"></link>
            <link href="https://starbucks.com/next_static/icons/pwa-icon-192.png" rel="icon" sizes="192x192" type="image/png"></link>
            <link color="#008046" href="https://starbucks.com/next_static/icons/safari-pinned-tab.svg" rel="mask-icon"></link>
        </Head>
        
        <header className={styles.header}>
          <NavBar />
          <div>
            <span>STARBUCKS® REWARDS</span>
            <button>Join in the app</button>
          </div>
        </header>

        <div className={styles.hero}>
          <div className={styles.textContainer}>
            <h1>Free Coffee is a tap away</h1>
            <p>Join now to start earning rewards</p>
            <button>Join now</button>
            <span>Or join in the app for the best experience</span>
          </div>
        </div>

    </div>
  )
}

export default Rewards