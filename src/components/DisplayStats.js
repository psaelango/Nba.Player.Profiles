import React, { Component } from 'react';
import propTypes from 'prop-types';

class DisplayStats extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    console.log(this.props.data);
  }
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1>{this.props.title}</h1>
        <table className="basic-info table table-dark" style={{width: "100%"}}> 
            <thead>
              <tr>
                {this.props.all_season ? <td>Season</td> : <React.Fragment></React.Fragment>}
                <td>Total Games</td>
                <td>Assists</td>
                <td>Minutes</td>
                <td>Points</td>
                <td>Rebounds</td>
              </tr>
            </thead>
            <tbody>
                {
                  this.props.data.map((row, index) =>
                    <tr key={index}>
                      {row.season ? <td>{row.season}</td> : <React.Fragment></React.Fragment>}
                      <td>{row.games_played}</td>
                      <td>{row.points_per_game}</td>
                      <td>{row.rebounds_per_game}</td>
                      <td>{row.assists_per_game}</td>
                      <td>{row.minutes_per_game}</td>
                    </tr>
                  )
                }
            </tbody>
          </table>
      </div>
    );
  }
}

DisplayStats.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    season: propTypes.string,
    team_name: propTypes.string,
    team_city: propTypes.string,
    team_image_url: propTypes.string,
    games_played: propTypes.number,
    assists: propTypes.number,
    points_per_game: propTypes.number,
    rebounds: propTypes.number,
    rebounds_per_game: propTypes.number,
    assists_per_game: propTypes.number,
    field_goal_percentage: propTypes.number,
    minutes_per_game: propTypes.number
  })),
  title: propTypes.string
};

export default DisplayStats;
