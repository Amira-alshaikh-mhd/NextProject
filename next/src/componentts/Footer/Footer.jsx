import Image from "next/image";
import styles from "./Footer.module.css";
import { social_media } from "./data";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Hexashop. All rights reserved.</div>

      <div className={styles.social}>
       
        {social_media.map(media => 
         <Image key={media.id} src={`/images/icons/${media.name}.png`} width={20} height={20} alt={`Hexashop ${media.name} link`} className={styles.icon}></Image>
          )}
      
    </div>
    </div>
  );
}
