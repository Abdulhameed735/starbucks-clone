import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/SignIn.module.css';
import { logo } from '../../assets/index';

const SignIn = () => {
  return (
    <div>
      <Head>
            <title>Account sign In: Starbucks Coffee Company</title>
            <link href="https://starbucks.com/next_static/icons/favicon-16x16.png" rel="icon"></link>
            <link href="https://starbucks.com/next_static/icons/favicon-32x32.png" rel="icon"></link>
            <link href="https://starbucks.com/next_static/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"></link>
            <link href="https://starbucks.com/next_static/icons/pwa-icon-192.png" rel="icon" sizes="192x192" type="image/png"></link>
            <link color="#008046" href="https://starbucks.com/next_static/icons/safari-pinned-tab.svg" rel="mask-icon"></link>
      </Head>

      <header className={styles.header}>
        <Link href='/'><nav className={styles.header__nav}><Image src={logo} alt='logo'/></nav></Link>
      </header>

      <div className={styles.header__text}>
          <h1>Sign in or create an account</h1>
      </div>

      <section className={styles.section}>
        <p>* indicates required field</p>

        <form className={styles.form} >
          <input type="text" placeholder="* Username or email address" />
          <input type="text" placeholder="* Password" />

          <div className={styles.checkBox}>
            <label>
              <input type="checkbox" />
              <span className={styles.custom__checkbox}></span>
              <span>Keep me signed in</span>
            </label>

            <div className={styles.overlay}>
              <span>Details</span>
            </div>
          </div>

          <div className={styles.forgot}>
            <span><a>Forgot your username?</a></span>
            <span><a>Forgot your password?</a></span>
          </div>

          <button className={styles.signIn}>Sign in</button>
        </form>
      </section>

      <div className={styles.card}>
        <h1>JOIN STARBUCKS® REWARDS</h1>
        <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
        <button><Link href='/account/create'>Join now</Link></button>
      </div>

      <footer className={styles.footer}>
        <div className={styles.first__footer}>
          <div>
            <button><Link href='/store-locator'>Find a store</Link></button>
          </div>
    
          <ul>
            <li>Web Accessibility</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Prefrences</li>
          </ul>
        </div>

        <div className={styles.second__footer}>
          <span>© 2022 Starbucks</span>
        </div>
      </footer>

    </div>
  )
}

export default SignIn