import Axios from 'axios';

const URL = 'http://localhost:8080';

const apiService = {

    getPhotos: () =>
        Axios.get(`${URL}/photo`)
            .catch((error) => error.response),

    deletePhoto: (photoID) =>
        Axios.delete(`${URL}/photo/${photoID}`)
            .catch((error) => error.message)

}

export default apiService;
