import React from 'react';
import "./TableDesign.scss";

const TableBody = (props) => {

    const photo = props.photo !== undefined ? props.photo : null;
    const photoID = photo.id;

    const editPhoto = () => {
        console.log("edit foto ", photoID);
    }

    const deletePhoto = () => {
        console.log("delete foto");


    }

    if (photo !== null){
        return (
            <React.Fragment key={ photo.id }>
                <td>{ photo.caption }</td>
                <td>{ photo.photo_credit }</td>
                <td>{ photo.view_counter }</td>
                <td className="edit" onClick={editPhoto}>Edit</td>
                <td className="delete" onClick={deletePhoto}>Delete</td>
            </React.Fragment>
        )
    }
}

export default TableBody;