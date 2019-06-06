import React from 'react';
import logo from './logo.svg';
import './App.css';
import perfumes from '../src/data/data.json';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';

class App extends React.Component {

  state = {
    items: [...perfumes]
  }

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
        "name": e.target[0].value,
        "description": e.target[1].value,
    }

    this.setState(prevState => ({
      items: [newItem, ...prevState.items],
    }));

    e.target.reset();

  }

  render(){
    return (
      <div className="App">
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
      </div>
    );
  }
}


export default App;
