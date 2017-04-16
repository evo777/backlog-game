import React from 'react';
import Auth from '../modules/Auth';
import GameBoard from '../components/GameBoard.jsx';


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: "Breath of the Wild"
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupGames">Games</label>
             <input type="text" className="form-control" id="formGroupGames" ref="game" placeholder="Input Game" />
          </div>

          <div className="form-group">
            <label htmlFor="formGroupTime">Time Played</label>
            <input type="text" className="form-control" id="formGroupTime" ref="time" placeholder="Input Time" />
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>

        <GameBoard games={this.state.games} />
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({games: this.refs.game.value, time: this.refs.time.value})
  }

}

export default DashboardPage;
