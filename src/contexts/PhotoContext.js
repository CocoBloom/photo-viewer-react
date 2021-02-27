import React, { useState, createContext, useEffect } from "react";
import apiService from "../services/ApiService";

export const PhotoContext = createContext();

export const PhotoProvider = (props) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function getPhotos() {
            const response = await apiService.getPhotos();
            setPhotos(response.data);
            console.log(photos);
        }
        getPhotos();

    }, [])

    return (
        <PhotoContext.Provider value={[photos, setPhotos]}>
            {props.children}
        </PhotoContext.Provider>
    );
};
