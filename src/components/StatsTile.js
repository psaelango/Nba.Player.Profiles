import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DisplayStats from './DisplayStats'; 

const StatsTile = props => (
  <div className="flex-grow stats-container">
    <div className="profile-card">
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Career Stats">
          <DisplayStats data={[props.career_total]} title="Career Stats" />
        </Tab>
        <Tab eventKey={2} title="Current Season Stats">
          <DisplayStats data={[props.current_season_stats]} title="Current Season Stats" />
        </Tab>
        <Tab eventKey={3} title="All Season Stats">
          <DisplayStats data={props.career} title="All Season Stats" all_season={true}/>
        </Tab>
      </Tabs>
    </div>
  </div>
)
export default StatsTile