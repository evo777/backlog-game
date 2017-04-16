import React from 'react';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My Game Board</h1>
        <ul>
          {this.props.games}
        </ul>
      </div>
    );
  }
}

export default GameBoard;