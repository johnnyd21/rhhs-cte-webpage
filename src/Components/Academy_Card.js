import React from 'react';

function Academy_Card(props) {
  return (
    <div className="Academy_Card">
      <div className="card" >
        <img className="card-img-top" src={props.img} alt={props.alt}/>
        <div className="card-body">
            <h5>{props.title}</h5>
            <p> {props.text} </p>
            <a href= {props.webpage} className="btn btn-primary">Find Out More!</a>
            <button onClick={() => {props.makeChoice(props.title)}}>Click to Add to your Dashboard!</button>
        </div>
        </div>
    </div>
  );
}

export default Academy_Card;
