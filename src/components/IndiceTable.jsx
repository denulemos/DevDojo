import React from 'react';
import styles from './IndiceTable.module.css';


export default function IndiceTable({data}) {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.grid}>
        {data.map((row, i) => (
          <a className={styles.card} href={row.link} key={i}>
            <span className={styles.icon}>{row.tema}</span>
            <span className={styles.name}>{row.nombre}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
