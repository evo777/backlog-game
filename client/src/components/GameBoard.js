import React from 'react';

class GameBoard extends React.Component {
  render() {
    return (
      <div className="search-form">
        <form>
          <label>Game</label>
          <input placeholder="Type game name"/>
          <button className="btn btn-primary">Submit Game</button>

          <label>Time Played</label>
          <input placeholder="Typed estimated time"/>
          <button className="btn btn-primary">Submit Game</button>
        </form>
      </div>
    );
  }
}

export default GameBoard;