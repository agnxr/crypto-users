import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import Popup from './Popup/Popup';


class ListItem extends React.Component {
state = {
    isPopupOpen: false,
}

openPopup = () => {
  this.setState({
    isPopupOpen: true,
  })
}

closePopup = () => {
  this.setState({
    isPopupOpen: false,
  })
}


render() {
    const  { isPopupOpen } = this.state;
    return (
        <tr className={styles.row}>

            <td className={styles.data}>{this.props.nickname}</td>
            <td className={styles.data}>{this.props.email}</td>
            <td className={styles.data}>{this.props.ip}</td>
            <td className={styles.data}>{new Date(this.props.date).toLocaleString("pl-PL", { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}
            </td>
            <td className={styles.data}>
       
                {/*<button onClick={() => this.props.deleteUserFn(this.props.nickname)}>Remove</button>*/}
                <button onClick={this.openPopup} className={styles.removeBtn}></button>
                </td>
                
                { isPopupOpen && <Popup deleteUserFn={this.props.deleteUserFn} nick={this.props.nickname} closePopupFn={this.closePopup}/> }

    </tr>        
    )
}
}

ListItem.propTypes = {
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    ip: PropTypes.string.isRequired,
}



export default ListItem;