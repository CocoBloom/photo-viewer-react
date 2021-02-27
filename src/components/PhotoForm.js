import React, {useRef, useState} from 'react';
import { Button, Form } from "react-bootstrap";
import "./FormDesign.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const PhotoForm = () => {

    const caption = useRef(null);
    const photo_credit = useRef(null);

    const savePhoto = () => {

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
                <Button variant="secondary" type="button" onClick={ savePhoto }>
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default PhotoForm;