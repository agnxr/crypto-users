import React from 'react';
import styles from './Modal.module.scss';


const Modal = ({ closeModalFn, deleteListFn }) => (
  <div className={styles.wrapper}>
    <button onClick={closeModalFn}>close me</button>
    <p>Are you sure you want to delete all users?</p>

    <button onClick={deleteListFn}>Yes</button>
    <button onClick={closeModalFn}>Cancel</button>
  </div>  
);

export default Modal;