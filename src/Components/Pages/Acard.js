import React from 'react';
import  './../../css/Bootstrap.css';

function Acard(props) {
    return( 
            
            <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://www.stemlittleexplorers.com/wp-content/uploads/2017/05/Learn-to-Program-with-Scratch-Cover-Image.jpg" alt="Scratch"/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                 <a href={props.projectlink} className="btn btn-primary">Click Here!</a>
                 </div>
            </div>
        );
    };          
            


export default Acard; 