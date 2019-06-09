import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';


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
    </>
);

export default ListWrapper;