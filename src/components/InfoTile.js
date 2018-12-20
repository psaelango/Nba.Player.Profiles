import React from 'react';

const pounds = "lbs";

const InfoTile = props => (
  <div className="flex-grow info-container">
    <div className="profile-card">
      <table className="basic-info table table-dark" style={{width: "100%", marginBottom: "0px"}}> 
        <tbody>
          <tr>
            <td>
              <h2>Basic Info</h2>
            </td>
            <td>
              <h3>Height</h3>
              <h3>{props.height_inches}</h3>
            </td>
            <td>
              <h3>Weight</h3>
              <h3>{props.weight_pounds + pounds}</h3>
            </td>
            <td>
              <h3>Age</h3>
              <h3>{props.age}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h2>Latest Stats</h2>
            </td>
            <td>
              <h3>Current Team</h3>
              <h3>{props.team_name}</h3>
            </td>
            <td>
              <h3>Position</h3>
              <h3>{props.position}</h3>
            </td>
            <td>
              <h3>Total Seasons</h3>
              <h3>{props.seasons}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)
export default InfoTile