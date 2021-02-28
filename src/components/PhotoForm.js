import React, {useContext, useRef, useState} from 'react';
import { PhotoContext } from "../contexts/PhotoContext";
import { EditContext } from "../contexts/EditContext";
import apiService from "../services/ApiService";
import { Button, Form } from "react-bootstrap";
import "./PhotoFormDesign.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const PhotoForm = () => {

    const [photos,setPhotos] = useContext(PhotoContext);
    const [editFields,setEditFields] = useContext(EditContext);
    const [editedPhotoID, setEditedPhotoID] = useState(null);
    const [edit, setEdit] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    let caption = useRef(null);
    let photo_credit = useRef(null);

    const getEditingFields = async (photoID) => {
        const response = await apiService.getPhotoByID(photoID);
        photo_credit.current.value = response.data[0].photo_credit;
        caption.current.value = response.data[0].caption;
        setEditedPhotoID(photoID);
        setEditFields({edit : false, photo_id : null});
        setEdit(true);
    }

    const saveOrEditPhoto = async (e) => {
        e.preventDefault();
        const photo_credit_input = photo_credit.current.value;
        const caption_input = caption.current.value;

        if (photo_credit_input === "" || caption_input === "") {
            setErrorMessage("Please fill out all input fields!");
        } else {
            const photo = {
                caption : caption_input,
                photo_credit : photo_credit_input
            };
            if (edit) {
                editPhoto(photo);
            } else {
                addNewPhoto(photo);
            }
            caption.current.value = '';
            photo_credit.current.value = '';
        }
    }

    const editPhoto = async (photo) => {
        photo['id'] = editedPhotoID;
        const response = await apiService.updatePhoto(editedPhotoID, photo);
        if (response.status === 201) {
            photo['view_counter'] = response.data.view_counter;
            let updatedData = photos.map(function (e) {
                if (parseInt(e.id) === parseInt(editedPhotoID)) {
                    return photo;
                } else {
                    return e;
                }
            });
            setPhotos(updatedData);
            setEdit(false);
        }
    }

    const addNewPhoto = async (photo) => {
        const response = await apiService.savePhoto(photo);
        if (response.status === 201) {
            photo['id'] = response.data.newPhotoID.toString();
            photo['view_counter'] = "0";
            setPhotos((oldPhotos) => [...oldPhotos, photo]);
        }
    }

    if (editFields !== null && editFields!== undefined && editFields.edit) {
        const photoID = editFields.photo_id;
        getEditingFields(photoID);
    }

    return (
        <div className="photo-form-container">
            <Form className="photo-form">
                <h3>New Photo details:</h3>
                <Form.Group controlId="formPhotoCredit">
                    <Form.Label>Photo credit:</Form.Label>
                    <Form.Control
                        className="control"
                        type="text"
                        placeholder="Made by"
                        autoComplete="off"
                        ref={photo_credit}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control
                        className="control"
                        type="text"
                        as="textarea"
                        rows={5}
                        autoComplete="off"
                        ref={caption}
                        placeholder="Caption"
                    />
                </Form.Group>
                { errorMessage }
                <Button variant="secondary" type="button" onClick={ saveOrEditPhoto }>
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default PhotoForm;