import React from 'react';
import error from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger text-center'>The page is not found</h1>
            <img className='h-auto w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;