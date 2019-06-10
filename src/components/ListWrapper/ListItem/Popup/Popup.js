import React from 'react';
import styles from './Popup.module.scss';

const Popup = ({ closePopupFn, deleteUserFn, nick}) => (
  <div className={styles.wrapper}>
    <button onClick={closePopupFn} className={styles.closeBtn} />
    <div className={styles.popup}>
      <p className={styles.popupTxt}>Are you sure you want to delete user <span className={styles.userName}>{nick}</span>?</p>
      <div>
        <button onClick={() => deleteUserFn(nick)} className={styles.confirm}>Yes</button>
        <button onClick={closePopupFn} className={styles.cancel}>Cancel</button>
      </div>
    </div>
  </div>  
);

export default Popup;