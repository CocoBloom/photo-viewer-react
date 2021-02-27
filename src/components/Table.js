import React, {useEffect, useContext, useState} from 'react';
import apiService from "../services/ApiService";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableDesign.scss";
import TableBootstrap from 'react-bootstrap/Table';
import { PhotoContext } from '../contexts/PhotoContext';


const Table = () => {

    const [photos,setPhotos] = useContext(PhotoContext);

    return (
        <TableBootstrap striped bordered hover variant="dark" className="table">
            <thead>
                <tr><TableHeader/></tr>
            </thead>
            <tbody>
                {photos.map((row, index) => (
                    <tr key={row.id}><TableBody index={index} photo={row}/></tr>
                ))}
            </tbody>
        </TableBootstrap>
    )
}

export default Table;