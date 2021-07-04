import React from 'react';


//Function Component:
const Card = (props) => {
    return( 
        <div className="card text-center shadow">
          <div className="overflow">
            <img src={props.img} alt="pic1" className="card-img-top" width="340px" height="260px" />
          </div>

          <div className="card-body text-dark">
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text text-secondary">
               {props.para} 
              </p>
              <a href="#" className="btn btn-outline-info">Read more</a>
          </div>
           
        </div> 
    ); 
}

export default Card;
