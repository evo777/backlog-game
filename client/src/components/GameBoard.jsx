import React from 'react';

class GameBoard extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    console.log("Able to submit!");
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Game</label>
            <input type="text" ref="game" placeholder="Type game name"/>

            <label>Time Played</label>
            <input type="text" ref="time" placeholder="Typed estimated time"/>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default GameBoard;