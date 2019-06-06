import React from 'react';
import PropTypes from 'prop-types';

const Input = ({tag: Tag, name, label, maxLength}) => (
    <div>
    <label htmlFor={name}>{label} </label>
        <Tag 

            type="text"
            name={name}
            id={name}
            required 
            maxLength={maxLength}
            placeholder=" "
        
        />

    </div>
)

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
}

Input.defaultProps = {
    tag: 'input',
    maxLength: 30,
}

export default Input;