// Card.js
import React from 'react';
// import iphone from '../Resources/iphone.jpeg';
import '../Stylesheet/Card.css';

const Card = (props) => {
    return (
        <div className="item">
            <img src={props.value.url} className="item-img" alt="{props.value.name}" />
            <div className="card-body">
                <p className="item-text text-center mt-1">
                    {props.value.name}
                </p>
            </div>
        </div>
    );
};

export default Card;
