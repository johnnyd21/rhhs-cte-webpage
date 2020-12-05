import React from 'react';
function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3>Your Academy Dashboard</h3>
      <div className="choice-group">
        <p className="choice">Number 1 Choice: {props.number1}</p>
        <p className="choice">Number 2 Choice: {props.number2}</p>
        <p className="choice">Number 3 Choice: {props.number3}</p>
      </div>
    </div>
  );
}
export default Dashboard;