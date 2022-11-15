import styles from '../styles/GiftCards.module.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../pages/api/lib/firebase';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'

const GiftCards = ({dbCollection}) => {
  const router = useRouter();

  const [data, setData] = useState([])

  const dataRef = collection(db, `${dbCollection}`)
  getDocs(dataRef).then(res => {
    const docs = res.docs.map((doc) => ({
      imgUrl: doc.data().imgUrl,
      id: doc.data().id
    }))

    setData(docs)
  }).catch(error => console.log(error))


  return (
    <div className={styles.gifts__container}>
      {data.map(datum => (
        <div 
          onClick={() => {
            router.push({
              pathname: '/gift/[id]',
              query: {id: datum.id, imgSrc: datum.imgUrl},
            }, `/gift/${datum.id}`)
          }} 
          className={styles.gifts__cards} key={datum.id}
        >
          <Image 
            placeholder='blur' 
            blurDataURL='../assets/static-images/placeholder.webp' 
            quality={100} src={datum.imgUrl} 
            alt="gift-card" 
            width={260} height={170} 
          />
        </div>
      ))}
    </div>
  )
}

export default GiftCards