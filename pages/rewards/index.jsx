import Head from 'next/head';
import NavBar from '../../components/NavBar';
import styles from '../../styles/Rewards.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { one, two, three, fun, order, free, A1, A2, B1, B2 } from '../../assets';

const Rewards = () => {
  return (
    <div className={styles.main}>
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
            <button><Link href="rewards/mobile-apps">Join in the app</Link></button>
          </div>
        </header>

        <div className={styles.hero}>
          <div className={styles.textContainer}>
            <h1>Free Coffee is a tap away</h1>
            <p>Join now to start earning rewards</p>
            <button><Link href='account/create'>Join now</Link></button>
            <span>Or <Link href='rewards/mobile-apps'>join in the app</Link> for the best experience</span>
          </div>
        </div>

        <div className={styles.firstSec}>
          <div className={styles.firstSec__header}>
            <h1>Getting Started is easy</h1>
            <h3>Earn Stars and get rewarded in a few easy steps.</h3>
          </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <Image src={one} alt='one' />
              <h1>Create an account</h1>
              <h3>To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</h3>
            </div>

            <div className={styles.step}>
              <Image src={two} alt='two' />
              <h1>Order and pay how you’d like</h1>
              <h3>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how.</h3>
            </div>

            <div className={styles.step}>
              <Image src={three} alt='three' />
              <h1>Earn Stars, get Rewards</h1>
              <h3>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</h3>
            </div>
          </div>
        </div>

        {/* ** Third Section */}
        <div className={styles.thirdSec}>
          <div className={styles.thirdSec__header}>
            <h1>Endless Extras</h1>
            <h3>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</h3>
          </div>

          <section className={styles.steps}>
            <div className={styles.third__step}>
              <Image src={fun} alt='one' />
              <div className={styles.third__flex}>
                <h1>Fun freebies</h1>
                <h3>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</h3>
                <a href="">Learn more</a>
              </div>
            </div>

            <div className={styles.third__step}>
              <Image src={order} alt='two' />
              <div className={styles.third__flex}>
                <h1>Order & pay ahead</h1>
                <h3>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</h3>
                <a href="">Learn more</a>
              </div>
            </div>

            <div className={styles.third__step}>
              <Image src={free} alt='three' />
              <div className={styles.third__flex}>
                <h1>Get to free faster</h1>
                <h3>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</h3>
                <a href="">Learn more</a>
              </div>
            </div>
          </section>
        </div>

        {/* ** Fourth Section */}
        <section className={styles.fourthSec}>
          <div className={styles.fourthSec__Wrapper}>
            <header>
              <h1>Cash or card, you earn Stars</h1>
              <h3>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</h3>
            </header>

            <div className={styles.wrap}>
              <div className={styles.first__wrap}>
                <div className={styles.no}>
                  <h1>1★ per dollar</h1>
                  <p>Pay as you go</p>
                </div>

                <div className={styles.imageText}>
                  <div className={styles.first__ImageText}>
                    <Image src={A1} alt='' />
                    <div className={styles.firstText}>
                      <h2>Scan and pay separately</h2>
                      <h3>Use cash or credit/debit card at the register.</h3>
                    </div>
                  </div>

                  <div className={styles.first__ImageText}>
                  <Image src={A2} alt='' />
                    <div className={styles.secondText}>
                      <h2>Scan and pay separately</h2>
                      <h3>Use cash or credit/debit card at the register.</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.first__wrap}>
                <div className={styles.no}>
                  <h1>2★ per dollar</h1>
                  <p>Add funds in the app</p>
                </div>

                <div className={styles.imageText}>
                  <div className={styles.first__ImageText}>
                    <Image src={B1} alt='' />
                    <div className={styles.firstText}>
                      <h2>Preload</h2>
                      <h3>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</h3>
                    </div>
                  </div>

                  <div className={styles.first__ImageText}>
                  <Image src={B2} alt='' />
                    <div className={styles.secondText}>
                      <h2>Register your gift card</h2>
                      <h3>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

    </div>
  )
}

export default Rewards