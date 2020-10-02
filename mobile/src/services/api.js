import axios from 'axios';

const api= axios.create({
    baseURL: 'http://192.168.1.108:3333',
    //lembre-se de colocar o seu IP aqui!
});

export default api;