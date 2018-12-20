import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Profile from './components/Profile';
import PlayerList from './services/PlayerList';
import Loader from 'react-loader-spinner';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerData: null,
      playerLoading: true,
      playerList: PlayerList,
      currentPlayerIndex: 0
    }
    this.fetchNextPlayer = this.fetchNextPlayer.bind(this);
  }
  componentDidMount(){
    this.fetchNextPlayer();
  }
  fetchNextPlayer(){
    this.setState({playerLoading: true})
    let currentFetchIndex = this.state.currentPlayerIndex;
    fetch(this.state.playerList[currentFetchIndex])
    .then(response => {
      return response.json();
    })
    .then(result => {
      let playerProfile = result.data.player;
      console.log(playerProfile);
      this.setState({playerData: playerProfile});
      if(currentFetchIndex == this.state.playerList.length-1){
        this.setState({currentPlayerIndex: 0});
      }
      else{
        this.setState({currentPlayerIndex: currentFetchIndex + 1});
      }
    })
    .catch(error => {
      alert(error);
    })
    .finally(() => { 
      this.setState({playerLoading: false})
    });
  }
  render() {
    return (
      <div className="App">
          <Button onClick={()=>this.fetchNextPlayer()}>Next Player</Button>
          {
            this.state.playerLoading ? 
            <div className="flex-display">
              <Loader 
                type="ThreeDots"
                color="#00BFFF"
                height="100"	
                width="100"
              />   
            </div>
            : 
              <Profile {...this.state.playerData}/> 
          }
      </div>
    );
  }
}

export default App;
