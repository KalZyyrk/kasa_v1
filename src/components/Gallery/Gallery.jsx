import data from '../../data/flatData.json'
import ItemGlry from './ItemGlry';
import { useState } from 'react';

export default function Gallery() {
    const [apparts, setApparts] = useState(data);

    return (
        <div className="gallery">
            {apparts.map((appart) => (
                < ItemGlry key={appart.id} appart={appart} />
            ))
            }
        </div >
    )
}