import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ closeModalFn, deleteListFn }) => (
  <div className={styles.wrapper}>
    <button onClick={closeModalFn} className={styles.closeBtn} />
    <div className={styles.popup}>
      <p>Are you sure you want to delete all users?</p>
      <div>
        <button onClick={deleteListFn} className={styles.confirm}>Yes</button>
        <button onClick={closeModalFn} className={styles.cancel}>Cancel</button>
      </div>
    </div>
  </div>  
);

export default Modal;