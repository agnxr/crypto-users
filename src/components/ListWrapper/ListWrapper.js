import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';


<<<<<<< HEAD
const ListWrapper = (props) => (
    <>
        {props.items.length ? (
        <ul className={styles.wrapper}>
            {
                props.items.map(item => (
                <ListItem 
                    deleteUserFn={props.delete} 
                    key={item.nickname} 
                    {...item} 
                />
                )) 
            }
        </ul>
        ) : (
            <h1>The list is empty</h1>
        )}
=======
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

>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a
    </>
);

export default ListWrapper;