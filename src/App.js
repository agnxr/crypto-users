import React from 'react';
import logo from './logo.svg';
import './App.css';
import users from '../src/data/data.json';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';

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

    e.target.reset();

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

  render(){

    const  { isModalOpen } = this.state;

    return (
      <div className="App">
      <button onClick={this.openModal}>Otworz modal</button>
        <header className="App-header">
          <p>
            User List
          </p>
        </header>
        <Form submitFn={this.addItem} />
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
