import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';


const ListWrapper = ({items}) => (
    <>
    {items.length ? (
    <ul className={styles.wrapper}>
    {items.map(item => (
        <ListItem key={item.nickname} {...item} />
    )) }
</ul>
    ) : (
        <h1>Lista jest pusta</h1>
    
    )}

    </>
);

export default ListWrapper;