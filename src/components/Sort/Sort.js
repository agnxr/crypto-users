import React from 'react';
import styles from './Sort.module.scss';

const Sort = ({ sortByNameFn, sortByEmailFn, sortByDateFn}) => (
  <section className={styles.wrapper}>
    <h2 className={styles.title}>Sort list by:</h2>
    <button className={styles.button} onClick={sortByNameFn}>nickname</button>
    <button className={styles.button} onClick={sortByEmailFn}>e-mail</button>
    <button className={styles.button} onClick={sortByDateFn}>date</button>
  </section>
);

export default Sort;