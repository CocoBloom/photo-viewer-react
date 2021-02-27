import React, {useEffect, useState} from 'react';
import apiService from "../services/ApiService";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableDesign.scss";
import TableBootstrap from 'react-bootstrap/Table'

const Table = () => {

    const [photos,setPhotos] = useState([]);

    useEffect(() => {

        async function getPhotos() {
            const response = await apiService.getPhotos();
            setPhotos(response.data);
        }
        getPhotos();

    }, []);

    return (
        <TableBootstrap striped bordered hover variant="dark" className="table">
            <thead>
                <tr><TableHeader/></tr>
            </thead>
            <tbody>
                {photos.map((row) => (
                    <tr key={row.id}><TableBody  photo={row}/></tr>
                ))}
            </tbody>
        </TableBootstrap>
    )
}

export default Table;