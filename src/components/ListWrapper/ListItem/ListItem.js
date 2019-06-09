import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import ListWrapper from '../ListWrapper';
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

elo = (e) => {
  if (e.target === this.refs.outsideOfModal){
    this.setState({
        isPopupOpen: false,
    });
  }
}






render() {
    const  { isPopupOpen } = this.state;
    return (
        <li className={styles.wrapper}>
        <div className={styles.item}>
            <h2>{this.props.nickname}</h2>
            <h3>{this.props.email}</h3>
            <p>{this.props.ip}</p>
            <p>data dodania: {new Date(this.props.date).toLocaleString("pl-PL", { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>
        </div>
<<<<<<< HEAD
                {/*<button onClick={() => this.props.deleteUserFn(this.props.nickname)}>Remove</button>*/}
                <button onClick={this.openPopup}>Remove</button>
                
                { isPopupOpen && <Popup deleteUserFn={this.props.deleteUserFn} nick={this.props.nickname} closePopupFn={this.closePopup}/> }
    </li>        
    )
=======
                <button>Remove</button>
    </li>
)
>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a
}
}

ListItem.propTypes = {
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    ip: PropTypes.string.isRequired,
}



export default ListItem;