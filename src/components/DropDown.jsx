import React from 'react';
import { useState } from 'react';
import chevronUp from '../assets/chevronUp.svg'

const DropDown = ({ id, title, content }) => {
    const [isActive, setIsActive] = useState(true);

    const displayContent = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div key={id} className='dropDown'>
                <div className='dropDown-header'>
                    <h3>{title}</h3>
                    <img src={chevronUp} alt="" onClick={displayContent}
                        className={isActive ? "rotate" : ""} />
                </div>
                {!isActive ? (
                    <div className='dropDown-contentDisplay'>
                        <p>{content}</p>
                    </div>
                ) : (
                    <div className='dropDown-content'>
                        <p>{content}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default DropDown;
