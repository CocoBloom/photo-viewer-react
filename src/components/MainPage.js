import React from 'react';
import Table from "./Table";
import PhotoForm from "./PhotoForm";

const MainPage = () => {

    return (
        <React.Fragment>
            <h1>Welcome in PhotoLand!</h1>
            <Table/>
            <PhotoForm/>
        </React.Fragment>
    )
}

export default MainPage;