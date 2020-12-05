import React from 'react';
function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3>Your Academy Dashboard</h3>
      <div className="choice-group">
          {props.choices.map(choice => <p className="choice">Number 1 Choice: {choice}</p>)}
      </div>
    </div>
  );
}
export default Dashboard;