import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = ({submitFn}) => (
        <form onSubmit={submitFn} autoComplete="off">
            <Input 
            name="nickname"
            label="Nickname"
            maxLenghth={20}
            />

            <Input 
            name="email"
            label="Email"
            maxLenghth={15}
            />

            <Input 
            name="ip"
            label="Ip address"
            maxLenghth={30}
            />
            <Button>add new item</Button>
        </form>

);

export default Form;