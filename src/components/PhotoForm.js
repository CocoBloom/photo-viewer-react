import React, {useContext, useRef, useState} from 'react';
import { Button, Form } from "react-bootstrap";
import "./FormDesign.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import apiService from "../services/ApiService";
import { PhotoContext } from "../contexts/PhotoContext";

const PhotoForm = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const caption = useRef(null);
    const photo_credit = useRef(null);

    const [photos,setPhotos] = useContext(PhotoContext);

    const savePhoto = async (e) => {
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
            const response = await apiService.savePhoto(photo);
            if (response.status === 201) {
                photo['id'] = response.data.newPhotoID.toString();
                photo['view_counter'] = "0";
                setPhotos((oldPhotos) => [...oldPhotos, photo]);
                photo_credit.current.value = '';
                caption.current.value = '';
            }
        }
    }

    return (
        <div className="photo-form-container">
            <Form className="photo-form">
                <Form.Group controlId="formPhotoCredit">
                    <Form.Label>Photo credit:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Photo credit of Picture"
                        autoComplete="off"
                        ref={photo_credit}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control
                        type="text"
                        as="textarea"
                        rows={5}
                        placeholder="Caption"
                        autoComplete="off"
                        ref={caption}
                    />
                </Form.Group>
                { errorMessage }
                <Button variant="secondary" type="button" onClick={ savePhoto }>
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default PhotoForm;