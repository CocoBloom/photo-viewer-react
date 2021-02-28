import React, { useContext } from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { PhotoContext } from '../contexts/PhotoContext';
import TableBootstrap from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableDesign.scss";

const Table = () => {

    const [photos] = useContext(PhotoContext);

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