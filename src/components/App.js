import React from 'react';
import '../stylesheet/App.css';
import pokemon from '../data/pokemon';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pokemon}


  }

  render() {
    return (
      <div className="App">
        <h1 className="page__title">Mi lista de Pokemons</h1>
        <PokeList dataList={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
