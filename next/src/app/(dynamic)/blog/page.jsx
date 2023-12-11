import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"



async function getData() {
  const res = await fetch('https://dummyjson.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Blog() {

  const data = await getData()
  const products = data.products

  console.log(data)


  return (
    <div className={styles.container}>

      {products.map(products => (
        <Link href={`/blog/${products.id}`} className={styles.post} key={products.id}>
        <div className={styles.ImageContainer}>
        <Image
        className={styles.image}
        src={products.thumbnail}
        width={350}
        height={250}
        alt="post image"
        
        />
        </div>
        <div className={styles.content}>
        <h1 className={styles.title}>{products.title}</h1>
        <p className={styles.text}>{products.description}</p>
        
        </div>
        
        
        
        
        </Link >

      ))}




    </div>
  )
}
