import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';

const ListItem = ({ 
    nickname,
    email,
    ip
}) => {


const defaultDesc = 'This iconic fragrance has stood the test of time, becoming and remaining cult classics in the beauty world. The scent is both inspired and inspiring.';

return (
    <li className={styles.wrapper}>
        <div className={styles.item}>
            <h2>{nickname}</h2>
            <h3>{email}</h3>
            <p>{ip}</p>
        </div>
    </li>
)
}
ListItem.propTypes = {
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    ip: PropTypes.string.isRequired,
}



export default ListItem;