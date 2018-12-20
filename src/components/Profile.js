import React, { Component } from 'react';
import propTypes from 'prop-types';
import InfoTile from './InfoTile'; 
import StatsTile from './StatsTile'; 
import './Profile.css';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    
    return (
      <div className="flex-display flex-column">
        <div className="flex-display flex-row title-card">
          <div className="flex-grow">
            <img src={this.props.image_url} style={{height: "auto", maxWidth: "500px"}}></img>
          </div>
          <div className="flex-grow" style={{margin: "auto"}}>
            <h1>{this.props.first_name + " " + this.props.last_name}</h1>
            <img src={this.props.team_image_url} style={{height: "auto", maxWidth: "100px", align: "middle"}}></img>
            <h2>{this.props.team_short_name}</h2>
          </div>
          <div className="flex-display flex-column flex-grow" style={{textAlign: "center", margin: "auto"}}>
          </div>
        </div>
        <InfoTile {...this.props}/>
        <StatsTile {...this.props}/>
      </div>
    );
  }
}

Profile.propTypes = {
  age: propTypes.number,
  background_image_url: propTypes.string,
  birth_timestamp: propTypes.number,
  career: propTypes.array,
  career_total: propTypes.object,
  college: propTypes.string,
  current_season_stats: propTypes.object,
  first_name: propTypes.string,
  games: propTypes.array,
  height_inches: propTypes.string,
  id: propTypes.number.isRequired,
  image_url: propTypes.string,
  injury_status: propTypes.string,
  injury_timestamp: propTypes.number,
  last_name: propTypes.string,
  number: propTypes.number,
  position: propTypes.string,
  seasons: propTypes.number,
  short_position: propTypes.string,
  team_city: propTypes.string,
  team_color: propTypes.string,
  team_id: propTypes.number,
  team_image_url: propTypes.string,
  team_name: propTypes.string,
  team_short_name: propTypes.string,
  weight_pounds: propTypes.number,
  years_pro: propTypes.number,
};

export default Profile;
