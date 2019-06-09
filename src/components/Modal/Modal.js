import React from 'react';
import styles from './Modal.module.scss';
<<<<<<< HEAD


const Modal = ({ closeModalFn, deleteListFn }) => (
  <div className={styles.wrapper}>
    <button onClick={closeModalFn}>close me</button>
    <p>Are you sure you want to delete all users?</p>

    <button onClick={deleteListFn}>Yes</button>
    <button onClick={closeModalFn}>Cancel</button>
=======
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button onClick={closeModalFn}>close me</button>
    <Form />
>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a
  </div>  
);

export default Modal;