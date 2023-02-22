import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../data/flatData.json'
import ErrorPage from './ErrorPage';
import SlideShow from '../components/SlideShow';
import Rating from '../components/Rating';
import DropDown from '../components/DropDown';


const Lodging = () => {
    const { logementId } = useParams()
    const appart = data.find((appart) => appart.id === logementId);

    const { id, title, location, pictures, tags, host, rating, equipments, description, } = appart || {}


    return appart ? (
        <div className='wrapper lodging'>
            <div className='slideContainer'>
                <SlideShow pictures={pictures} />
            </div>
            <div className='lodgingHeader'>
                <div className="lodgingInfo">
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <ul className='tag'>
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="ownerInfo">
                    <div className="nameAvatar">
                        <h3 className="nameOwner">{host.name}</h3>
                        <div className="avatarOwner">
                            <img src={host.picture} alt="" />
                        </div>
                    </div>
                    <div className="stars">
                        <Rating rate={rating} />
                    </div>
                </div>
            </div>
            <div className="description">
                <DropDown key={id} title='Description' content={description} />
                <DropDown title='Equipements' content={equipments.map((equi, index) => {
                    return <li key={index}>{equi}</li>
                }
                )} />
            </div>
        </div>
    ) : (
        <Navigate to="/error" replace={<ErrorPage />} />
    )
};

export default Lodging;
