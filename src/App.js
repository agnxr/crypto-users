import React from 'react';
import './App.css';
import users from '../src/data/data.json';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';
<<<<<<< HEAD
import styles from './App.module.scss';
=======
import UserForm from './components/UserForm/UserForm';

>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a


class App extends React.Component {
  state = {
    items: [...users],
<<<<<<< HEAD
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
=======
    isModalOpern: false,
>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a
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

<<<<<<< HEAD
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
=======
    //e.target.reset();
    //e.target[0].value = "elo";

 
  }


    // done.sort((a, b) => b.finishDate - a.finishDate)
/*
    if (done.length >= 2) {
      done.sort((a, b) => {
        if (a.finishDate < b.finishDate) {
          return 1
        }
        if (a.finishDate > b.finishDate) {
          return -1
        }
        return 0
      })
    }
    if (active.length >= 2) {
      active.sort((a, b) => {
  
        a = a.text.toLowerCase();
        b = b.text.toLowerCase();
  
        if (a < b) return -1;
        if (a > b) return 1;
        return 0
      })
    }
  */

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }


sortByName = (event) => {
  const users = this.state.items;
  let newUsers = users.reverse()
  this.setState({
    users: newUsers.sort((a,b) => a.date > b.date)
  })
}


  render(){

<<<<<<< HEAD
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
=======
    const  { isModalOpen } = this.state;

    return (
      <div className="App">
      <button onClick={this.openModal}>Otworz modal</button>
        <header className="App-header">
          <p>
            User List
          </p>
          <UserForm submitFn={this.addItem}/>
>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a
        </header>
        <section>
<<<<<<< HEAD
          <Form 
            items={this.state.items} 
            submitFn={this.addItem} 
            msgNick={messageNick} 
            msgMail={messageMail} 
            msgIP={messageIP}
          />
        </section>
        <section>
          <h2>Sort by:</h2>
            <button onClick={this.sortByName}>nickname</button>
            <button onClick={this.sortByEmail}>e-mail</button>
            <button onClick={this.sortByDate}>date</button>
        </section>
        <section>
          <div>
            {this.state.message && <h3>{this.state.message}</h3>}
          </div>
=======
          <h1>Sort user list by:</h1>
          <button onClick={this.sortByName}>nickname</button>
          <button>email</button>
          <button>date</button>

        </section>
        <section>
>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a
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
        <section>
          { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
        </section>
      </div>
    );
  }
}

export default App;