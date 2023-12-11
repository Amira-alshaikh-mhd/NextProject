import styles from './page.module.css'
import Image from 'next/image'



async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Post({params}) {

  const product = await getData(params.id)
  


  return (      
      
    <div className={styles.container}>



      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
          className={styles.image}
          src={product.thumbnail}
          alt={product.title}
          fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map(image =>(

            <Image 
            src={image}
            alt={product.title}
            width={200}
            height={200}
            />
          ))}


        </div>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illum magni corporis odit saepe, placeat obcaecati blanditiis! Inventore doloribus, reprehenderit earum nihil, minima voluptates nesciunt dignissimos eligendi, illum est voluptate!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati, eligendi a cupiditate beatae sapiente cumque placeat voluptas enim totam, voluptates temporibus similique perferendis ea ipsa rerum. Vero, iure asperiores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur accusantium hic non sit natus ducimus ea tempora illo, error dolore dolorum a quasi qui quis! Molestias tempora quis natus ab repellat aliquid sequi nisi, sit ipsum molestiae suscipit corporis facilis ducimus earum officiis delectus voluptate sint dolores, tempore ex?
        </p>
      </div>

    </div>
  )
}
