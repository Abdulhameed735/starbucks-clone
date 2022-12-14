import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Starbucks Coffee Company</title>
        <link href="https://starbucks.com/next_static/icons/favicon-16x16.png" rel="icon"></link>
        <link href="https://starbucks.com/next_static/icons/favicon-32x32.png" rel="icon"></link>
        <link href="https://starbucks.com/next_static/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"></link>
        <link href="https://starbucks.com/next_static/icons/pwa-icon-192.png" rel="icon" sizes="192x192" type="image/png"></link>
        <link color="#008046" href="https://starbucks.com/next_static/icons/safari-pinned-tab.svg" rel="mask-icon"></link>
      </Head>
    </div>
  )
}
