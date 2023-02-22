import React from 'react';
import star from '../assets/star.svg'
import starFull from '../assets/starFull.svg'

const Rating = (rate) => {
    const range = [1, 2, 3, 4, 5];
    return range.map((rangeElem, key) =>
        rangeElem <= rate.rate ? (
            <img className='star' src={starFull} key={key} alt='' />
        ) : (
            <img src={star} key={key} className='star empty' alt='' />
        )
    );
};

export default Rating;
