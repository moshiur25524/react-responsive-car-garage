import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright <span >&copy;</span> {date} Made by Moshiur Hero</small></p>
        </footer>
    );
};

export default Footer;