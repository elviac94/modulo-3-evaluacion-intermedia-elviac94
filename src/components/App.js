import React from 'react';
import '../stylesheet/App.css';
import pokemon from '../data/pokemon';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state=(pokemon)
      
    
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <PokeList dataList={this.state}/>
      </div>
    );
  }
}


export default App;
