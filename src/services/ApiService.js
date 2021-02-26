import Axios from 'axios';

const URL = 'http://localhost:8080';

const apiService = {
    getPhotos: (user) =>
        Axios.get(`${URL}/photo`, user)
            .catch((error) => error.response)
}

export default apiService;
