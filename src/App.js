import React from 'react';
import logo from './logo.svg';
import './App.css';
import users from '../src/data/data.json';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';
import UserForm from './components/UserForm/UserForm';


class App extends React.Component {

  state = {
    items: [...users],
    isModalOpern: false,
  }

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
        "nickname": e.target[0].value,
        "email": e.target[1].value,
        "ip": e.target[2].value,
    }

    this.setState(prevState => ({
      items: [newItem, ...prevState.items],
    }));

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

    const  { isModalOpen } = this.state;

    return (
      <div className="App">
      <button onClick={this.openModal}>Otworz modal</button>
        <header className="App-header">
          <p>
            User List
          </p>
          <UserForm submitFn={this.addItem}/>
        </header>
        <Form submitFn={this.addItem} />
        <section>
          <h1>Sort user list by:</h1>
          <button onClick={this.sortByName}>nickname</button>
          <button>email</button>
          <button>date</button>

        </section>
        <section>
          <ListWrapper 
            items={this.state.items}
          />
        </section>
        <section>
          { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
        </section>
      </div>
    );
  }
}


export default App;
