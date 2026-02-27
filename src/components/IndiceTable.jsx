import React from 'react';
import Link from '@docusaurus/Link';
import styles from './IndiceTable.module.css';


export default function IndiceTable({data}) {
  return (
    <section className={styles.gridWrapper} aria-label="Indice de temas">
      <div className={styles.grid}>
        {data.map((row) => (
          <Link className={styles.card} to={row.link} key={`${row.nombre}-${row.link}`}>
            <span className={styles.icon} aria-hidden="true">
              {row.tema}
            </span>
            <span className={styles.name}>{row.nombre}</span>
            <span className={styles.cta}>Explorar</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
