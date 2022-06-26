import React, {createContext, useState} from 'react';

export const GalleriesContext = createContext(null);

export const GalleriesProvider = ({children}) => {
    const [galleries, setGalleries] = useState([])

    return (
        <GalleriesContext.Provider value={{
            galleries,
            setGalleries
        }}>
        {children}
        </GalleriesContext.Provider>
    );
}