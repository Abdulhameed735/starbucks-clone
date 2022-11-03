import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import styles2 from '../styles/Cards.module.css';
import { image1 } from '../assets';
import { image2 } from '../assets';
import { image3 } from '../assets';
import { image4 } from '../assets';
import { image5 } from '../assets';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

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

      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section className={styles.sectionContainer}>
        <div className={styles.imageContainer}>
          <Image src={image1} alt='image-1' />
        </div>

        <article className={styles.textContainer}>
          <h1>A new way to earn sips and trips</h1>
          <p>Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:</p>
            <ul>
              <li>150 Stars + 500 miles when you link before 12/31</li>
              <li>Double Stars on Delta travel days</li>
              <li>1 mile per $1 spent at Starbucks (excludes taxes and gratuities)*</li>
            </ul>
          <button>Link accounts</button>
        </article>
      </section>

      {/* Cards */}
      <Cards 
        styling={styles2.sectionsContainer}
        headText='No tricks, just treats'
        pText='Send someone a spooky Starbucks eGift Card.'
        bText='Buy now'
        src={image2}
      />

      <Cards 
        styling={styles2.sectionsRowContainer}
        headText='Perfectly pumpkin'
        pText='Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew.'
        bText='Order now'
        src={image3}
      />

      <Cards 
        styling={styles2.sectionsContainer}
        headText='Pairs well with crisp mornings'
        pText='Discover the nondairy layers of Apple Crisp Oatmilk Macchiato, now with Starbucks® Blonde Espresso.'
        bText='Learn more'
        src={image4}
      />

      <Cards 
        styling={styles2.sectionsRowContainer}
        headText='Spice up your fall'
        pText='Warm your senses with the delightfully creamy Chai Tea Latte. Try it hot or iced.'
        bText='Learn more'
        src={image5}
      />

      <span>
        *Excludes taxes and gratuities. At participating stores. Some restrictions apply. 
        150 Stars deposited after first qualifying Starbucks purchase. 
        Flights purchased close to departure may not earn double Stars. 
        Stars may not be earned on purchases of alcohol, 
        Starbucks Cards and Starbucks Card reloads. 
        For details, visit deltastarbucks.com/terms
      </span>

      <Footer />
      
    </div>
  )
}
