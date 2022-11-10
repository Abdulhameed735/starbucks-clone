import styles from '../styles/ListGifts.module.css';
import GiftCards from './GiftCards';

const ListGift = ({title, col }) => {
  return (
    <section className={styles.container}>
      <div className={styles.section}>
          <div className={styles.head}>
              <h1>{title}</h1>
              <span>See all</span>
          </div>
      </div>

      <GiftCards dbCollection={col} />
    </section>
  )
}

export default ListGift