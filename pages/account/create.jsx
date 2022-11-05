import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Create.module.css';
import { logo } from '../../assets/index';

const Create = () => {
  return (
    <div>
      <Head>
            <title>Create a Starbucks Account: Starbucks Coffee Company</title>
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
          <h1>Create an account</h1>
          <h2>STARBUCKS® REWARDS</h2>
          <p>
            Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. 
            Get access to mobile ordering, a birthday Reward, and more.
          </p>
      </div>

      <section className={styles.section}>
        <p>* indicates required field</p>

        <form className={styles.form} >
          <div className={styles.personal__info}>
            <h1>Personal Information</h1>
            <input type="text" placeholder="* First name" />
            <input type="text" placeholder="* Last name" />
          </div>

          <div className={styles.account__info}>
            <h1>Account Security</h1>
            <input type="text" placeholder="* Email address" />
              <span>This will be your username</span>
            <input type="text" placeholder="* Password" />
              <span>
                Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 
                1 number and 1 special character like an exclamation point or asterisk.
              </span>
          </div>
          
          <fieldset className={styles.fieldset}>
            <h2>Collect more stars & earn rewards</h2>
            <p>Email is a great way to know about offers and what’s new from Starbucks.</p>

            <div className={styles.checkBox}>
              <label>
                <input type="checkbox" />
                <span className={styles.custom__checkbox}></span>
                <span>Yes, Id like email from Starbucks </span>
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <h2>Terms of use</h2>

            <div className={styles.checkBox}>
              <label>
                <input type="checkbox" />
                <span className={styles.custom__checkbox}></span>
                <span>I  agree to the Starbucks® Rewards Terms</span>
              </label>
            </div>
          </fieldset>

          <button className={styles.create}>Create account</button>
        </form>
      </section>

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

export default Create