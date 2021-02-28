import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import apiService from "../services/ApiService";
import "./PhotoDetailDesign.scss";

const PhotoDetailPage = () => {

    const { id } = useParams();
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        async function getPhoto(id) {
            const response = await apiService.getPhotoByID(id);
            setPhoto(response.data[0]);
            await apiService.increaseViewCounter(id);
        }
        getPhoto(id);

    }, [id]);

    return (
        <div className="detail-container">
            <div className="header">
                <h1>Details of Photo:</h1>
                <a href="/">Back to Main</a>
            </div>
            <div className="detail-form">
                <h3>Made by:</h3>
                <h5>{ photo.photo_credit }</h5>
                <h3>Caption:</h3>
                <h5>{ photo.caption }</h5>
            </div>
        </div>
    )
}

export default PhotoDetailPage;