import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,img,price,description} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;