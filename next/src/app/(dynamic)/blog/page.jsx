import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"


export default function Blog() {
  return (
    <div className={styles.container}>
<Link href="/blog/id" className={styles.post}>
<div className={styles.ImageContainer}>
<Image
className={styles.image}
src={"https://images.pexels.com/photos/18113138/pexels-photo-18113138/free-photo-of-horses-grazing-on-meadow.jpeg"}
width={350}
height={250}
alt="post image"

/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Post Title</h1>
<p className={styles.text}> Post Text</p>

</div>




</Link >


<Link href="/blog/id" className={styles.post}>
<div className={styles.ImageContainer}>
<Image
className={styles.image}
src={"https://images.pexels.com/photos/18113138/pexels-photo-18113138/free-photo-of-horses-grazing-on-meadow.jpeg"}
width={350}
height={250}
alt="post image"

/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Post Title</h1>
<p className={styles.text}> Post Text</p>

</div>




</Link >



<Link href="/blog/id" className={styles.post}>
<div className={styles.ImageContainer}>
<Image
className={styles.image}
src={"https://images.pexels.com/photos/18113138/pexels-photo-18113138/free-photo-of-horses-grazing-on-meadow.jpeg"}
width={350}
height={250}
alt="post image"

/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Post Title</h1>
<p className={styles.text}> Post Text</p>

</div>




</Link >




<Link href="/blog/id" className={styles.post}>
<div className={styles.ImageContainer}>
<Image
className={styles.image}
src={"https://images.pexels.com/photos/18113138/pexels-photo-18113138/free-photo-of-horses-grazing-on-meadow.jpeg"}
width={350}
height={250}
alt="post image"

/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Post Title</h1>
<p className={styles.text}> Post Text</p>

</div>




</Link >

    </div>
  )
}
