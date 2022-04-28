import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'http://jsonplaceholder.typicode.com/photos'
    })
}