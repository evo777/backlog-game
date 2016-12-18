import React from 'react';

class GameBoard extends React.Component {
  render() {
    return (
      <div>
        <label>Game</label>
        <input placeholder="Type game name"/>

        <label>Time Played</label>
        <input placeholder="Typed estimated time"/>
      </div>
    );
  }
}

export default GameBoard;