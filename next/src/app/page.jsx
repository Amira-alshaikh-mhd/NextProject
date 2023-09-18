import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/images/Hero.svg'

export default function Home() {
  return (
    <div className={styles.container}>
       <div className={styles.col}>

        <h1 className={styles.title}>Your one-stop e-commerce destination!</h1>
        <p className={styles.description}>Discover a world of endless shopping possibilities at our online store.
        Browse,choose, and order your favorite products from the comfort of your home</p>
        <button className={styles.button}>Shop now</button>
       </div>


       <div className={styles.col}></div>
       <Image className={styles.img} src={Hero} alt="Hexa shop"/>

    </div>
  )
}
