import Head from "next/head";
import ListGift from "../../components/ListGift";
import NavBar from "../../components/NavBar";
import styles from '../../styles/Gifts.module.css';

const Gift = () => {
  return (
    <div>
      <Head>
            <title>Starbucks Gift Cards: Starbucks Coffee Company</title>
            <link href="https://starbucks.com/next_static/icons/favicon-16x16.png" rel="icon"></link>
            <link href="https://starbucks.com/next_static/icons/favicon-32x32.png" rel="icon"></link>
            <link href="https://starbucks.com/next_static/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"></link>
            <link href="https://starbucks.com/next_static/icons/pwa-icon-192.png" rel="icon" sizes="192x192" type="image/png"></link>
            <link color="#008046" href="https://starbucks.com/next_static/icons/safari-pinned-tab.svg" rel="mask-icon"></link>
      </Head>

      <NavBar />

      <ListGift title={'Featured'} col='featured' />

      <div className={styles.info}>
        <div className={styles.info__first}>
          <h1>Got a gift card?</h1>

          <div className={styles.info__first_cont}>
            <div className={styles.info__first_texts}>
              <p>Earns 2★ per $1</p>
            </div>

            <div className={styles.info__first_buttons}>
              <button className={styles.add}>Add or reload</button>
              <button className={styles.check}>Check balance</button>
            </div>
          </div>
        </div>

        <div><a><span>Card Terms & Conditions</span></a></div>
      </div>
      
      <ListGift title={'Red cup'} col='redcup' />
      <ListGift title={'Veterans day'} col='veterans' />
      <ListGift title={'Birthday'} col='birthday' />
      <ListGift title={'Thank you'} col='thank-you' />
      <ListGift title={'Celebration'} col='celebration' />
      <ListGift title={'Thanksgiving'} col='thanksgiving' />
      <ListGift title={'Appreciation'} col='appreciation' />
      <ListGift title={'Workplace'} col='workplace' />
      <ListGift title={'Encouragement'} col='encouragement' />
      <ListGift title={'Affection'} col='affection' />
      <ListGift title={'Anytime'} col='anytime' />
    </div>
  )
}

export default Gift