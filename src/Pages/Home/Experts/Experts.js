import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    {id:1, name: 'Moshiur Rahman', img: expert1},
    {id:2, name: 'Osman Goni', img: expert2},
    {id:3, name: 'Nahid Shikder', img: expert3},
    {id:4, name: 'Hafizur Rahman', img: expert4},
    {id:5, name: 'Salehin Chowdury', img: expert5},
    {id:6, name: 'Knowledge Chakma', img: expert6}
]

const Experts = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;