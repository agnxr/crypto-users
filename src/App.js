import React from 'react';
import styles from './App.module.scss';
import users from '../src/data/data.json';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';
import Sort from './components/Sort/Sort';


class App extends React.Component {
  state = {
    items: [...users],
    isModalOpen: false,
    messageNick: '',
    messageMail: '',
    messageIP: ''
  }
  
  
  sortByName = () => {
    const users = this.state.items;
    let newUsers = users;
    this.setState({
      users: newUsers.sort((a,b) => {
      if(a.nickname.toLowerCase() < b.nickname.toLowerCase()) return -1;
      if (a.nickname.toLowerCase() > b.nickname.toLowerCase()) return 1;
      return 0;
      })
    })
  }

  sortByEmail = () => {
    const users = this.state.items;
    let newUsers = users;
    this.setState({
      users: newUsers.sort((a,b) => {
      if(a.email.toLowerCase() < b.email.toLowerCase()) return -1;
      if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
      return 0;
      })
    })
  }

  sortByDate = () => {
    const users = this.state.items;
    let newUsers = users
    this.setState({
      users: newUsers.sort((a,b) => b.date - a.date)
    })
  }
  
  deleteUsers = (e) => {
    const users = this.state.items;
    let newUsers = users
    this.setState({
      users: newUsers.length = 0,
      isModalOpen: false,
    })
  }

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      "nickname": e.target[0].value,
      "email": e.target[1].value,
      "ip": e.target[2].value,
      "date": Date.now(),
    }

    if(e.target[0].value.length < 1) {
      this.setState({
        messageNick: 'This field is required'
      })
    }

    else if (e.target[1].value.length < 1){
      this.setState({
        messageMail: 'This field is required'
      })
    }

    else if(e.target[2].value.length < 1) {
      this.setState({
        messageIP: 'This field is required'
      })
    }

    else {
      e.target[0].value !== '' && e.target[1].value !== '' && e.target[2].value !== '' && this.setState(prevState => ({
        items: [newItem, ...prevState.items],
        message: 'The new user has been added successfully',
      }));
        
      e.target.reset();
    }
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  deleteUser = (nickname) => {
    let allUsers = [...this.state.items];
    allUsers = allUsers.filter(user => user.nickname !== nickname);

    this.setState({
      items: allUsers,
      message: `User ${nickname} has been successfully removed`,
    })
  }

  componentDidUpdate() {
    if (this.state.messageNick !== '' || this.state.messageMail !== '' || this.state.messageIP !== '' || this.state.message !== '') {
      setTimeout(() => this.setState({
        messageNick: '',
        messageMail: '',
        messageIP: '',
        message: ''
      }), 2000)
    }
  }

  render(){

    const  { 
      isModalOpen, 
      messageNick, 
      messageMail, 
      messageIP 
    } = this.state;

    return (
      <div>
        <header className={styles.header}>
          <h1>
            Crypto users
          </h1>
        </header>
        <section>
          <Form 
            items={this.state.items} 
            submitFn={this.addItem} 
            msgNick={messageNick} 
            msgMail={messageMail} 
            msgIP={messageIP}
          />
        </section>
        <Sort 
          sortByNameFn={this.sortByName}
          sortByEmailFn={this.sortByEmail}
          sortByDateFn={this.sortByDate}
        />
        <section>
          <div>
            {this.state.message && <h3>{this.state.message}</h3>}
          </div>
          <ListWrapper 
            items={this.state.items}
            delete={this.deleteUser}
          />
          <div>
            {this.state.items.length > 0 && <button onClick={this.openModal}>Delete all users</button>} 
          </div>
        </section>
        <section>
          { isModalOpen && <Modal deleteListFn={this.deleteUsers} closeModalFn={this.closeModal} /> }
        </section>
      </div>
    );
  }
}

export default App;