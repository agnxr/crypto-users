import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';

const ListItem = ({ 
    image, 
    name, 
    designer, 
    description, 
    gender, 
    category
}) => {


const ImgTag = image  ? 'img' : 'div';
const defaultDesc = 'This iconic fragrance has stood the test of time, becoming and remaining cult classics in the beauty world. The scent is both inspired and inspiring.';

return (
    <li className={styles.wrapper}>
        <ImgTag
            className={ image ? styles.image : styles.noImg }
            src={image} 
            alt={name}
        />
        <div>
            <h2>{name}</h2>
            <h3>{designer}</h3>
            <p>{description ? description : defaultDesc}</p>
            <div>
                <p>gender: <span>{gender}</span></p>
                <p>category: <span>{category}</span></p>
            </div>
        </div>
    </li>
)
}
ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    designer: PropTypes.string.isRequired,
    description: PropTypes.string, 
    gender: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
    image: null,
    description: 'This iconic fragrance has stood the test of time, becoming and remaining cult classics in the beauty world. The scent is both inspired and inspiring.',
}


export default ListItem;