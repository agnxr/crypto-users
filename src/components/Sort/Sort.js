import React from 'react';
import styles from './Sort.module.scss';



const Sort = ({ sortByNameFn, sortByEmailFn, sortByDateFn}) => (
  <section>
  <h2>Sort by:</h2>
    <button onClick={sortByNameFn}>nickname</button>
    <button onClick={sortByEmailFn}>e-mail</button>
    <button onClick={sortByDateFn}>date</button>
</section>
);

export default Sort;