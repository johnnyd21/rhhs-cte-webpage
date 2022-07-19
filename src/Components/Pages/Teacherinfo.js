import React from 'react';
import  '../../css/Card.css';

function Teacherinfo({title,imageUrl,body,email,}) {
    return(       
<div className= 'card-container'>
        <div className= "image-container">
        <img src= {imageUrl} alt='' />
        </div>
    <div className= "card-content">
        <div className="card-title">
         <h3>{title}</h3>
        </div>
        <div className= "card-body">
            <p>{body}</p>
        </div>
        <div className= "card-body">
            <p>{email}</p>
        </div>
    </div>    
</div>

    )
}

export default Teacherinfo;