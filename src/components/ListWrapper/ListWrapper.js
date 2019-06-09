import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';


const ListWrapper = (props) => (
    <div className={styles.wrapper}>
        {props.items.length ? (
        <table className={styles.table}>
            <tr className={styles.header}>
                <th className={styles.title}>Nickname</th>
                <th className={styles.title}>Email</th>
                <th className={styles.title}>IP address</th>
                <th className={styles.title}>date</th>
                <th></th>
            </tr>
            { 
                props.items.map(item => (

                    <ListItem 
                        deleteUserFn={props.delete} 
                        key={item.nickname} 
                        {...item} 
                    />
                )) 
            }
        </table>
        ) : (
            <h2 className={styles.info}>The list is empty</h2>
        )}
    </div>
);

export default ListWrapper;