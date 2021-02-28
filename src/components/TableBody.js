import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { PhotoContext } from '../contexts/PhotoContext';
import { EditContext } from "../contexts/EditContext";
import apiService from "../services/ApiService";
import "./TableDesign.scss";


const TableBody = (props) => {

    const photo = props.photo !== undefined ? props.photo : null;
    const photoID = photo.id;
    const [photos,setPhotos] = useContext(PhotoContext);
    const index = parseInt(props.index) + 1;
    const history = useHistory();
    const [editFields, setEditFields] = useContext(EditContext);

    const editPhoto = () => {
        setEditFields({edit : true, photo_id : photoID});
    }

    const deletePhoto = async () => {
        await apiService.deletePhoto(photoID);
        const updatePhotos = photos.filter(
            (photo) => photo.id !== photoID
        );
        setPhotos(updatePhotos);
    }

    const viewPhotoDetails = () => {
        history.push(`/photo/${photoID}`);
    }

    return (
        <React.Fragment key={ photo.id }>
            <td>{ index }</td>
            <td>{ photo.photo_credit }</td>
            <td>{ photo.caption }</td>
            <td>{ photo.view_counter }</td>
            <td className="edit" onClick={editPhoto}>Edit</td>
            <td className="delete" onClick={deletePhoto}>Delete</td>
            <td onClick={viewPhotoDetails}>View</td>
        </React.Fragment>
    )
}

export default TableBody;