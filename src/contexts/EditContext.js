import React, { useState, createContext, useEffect } from "react";

export const EditContext = createContext();

export const EditProvider = (props) => {

    const [editFields, setEditFields] = useState(null);

    useEffect(() => {
        function getFields() {
            const initValues = {
                edit : false,
                photo_id : null
            }
            setEditFields(initValues);
        }
        getFields();
    }, [])

    return (
        <EditContext.Provider value={[editFields, setEditFields]}>
            {props.children}
        </EditContext.Provider>
    );
};
