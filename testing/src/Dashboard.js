import React from "react";

const Dashboard = (props) => {
    return (
        <div>

          <button onClick={props.addStrike}>Strike</button>
          <button onClick={props.addBall} >Ball</button>
          <button onClick={props.foulBall} >Foul Ball</button>
          <button onClick={props.hit}>Hit</button>

        </div>
    )
}

export default Dashboard;