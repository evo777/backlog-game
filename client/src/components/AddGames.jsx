import React from 'react';

class AddGames extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    console.log("Able to submit!");
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupGames">Games</label>
           <input type="text" className="form-control" id="formGroupGames" placeholder="Input Game" />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupTime">Time Played</label>
          <input type="text" className="form-control" id="formGroupTime" placeholder="Input Time" />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddGames;