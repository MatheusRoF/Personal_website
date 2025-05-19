'use client';

import Link from 'next/link';
import styles from './Styles/button_return.module.css';

export default function VoltarButton({ href = '/' }) {
  return (
    <Link href={href} passHref>
      <button className={styles.voltarButton}>
        ← Voltar
      </button>
    </Link>
  );
}