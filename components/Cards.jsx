import Image from "next/image";
import styles from '../styles/Cards.module.css';

const Cards = ({headText, pText, bText, src, styling}) => {
  return (
    <section className={styling}>
        <article className={styles.textsContainer}>
            <h1>{headText}</h1>
            <p>{pText}</p>
            <button>{bText}</button>
        </article>

        <div className={styles.imagesContainer}>
            <Image src={src} alt='card-image' />
        </div>
    </section>
  )
}

export default Cards