import React from 'react';
import styles from './Popup.module.scss';


const Popup = ({ closePopupFn, deleteUserFn, nick}) => (
  <div className={styles.wrapper}>
    <div className={styles.popup}>
      <button onClick={closePopupFn}>close me</button>
      <p>Are you sure you want to delete user <span>{nick}</span>?</p>
      
      <button onClick={() => deleteUserFn(nick)}>Yes</button>
      <button onClick={closePopupFn}>Cancel</button>
    </div>
  </div>  
);

export default Popup;