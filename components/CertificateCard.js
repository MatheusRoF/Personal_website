import Image from 'next/image';
import styles from '../Styles/certificados.module.css';

export default function CertificateCard({ title, imageSrc, category }) {
  return (
    <div className={styles.certificateCard}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={200}
          className={styles.certificateImage}
          objectFit="contain"
        />
      </div>
      <div className={styles.certificateContent}>
        <h3 className={styles.certificateTitle}>{title}</h3>
        <span className={styles.certificateCategory}>{category}</span>
      </div>
    </div>
  );
}