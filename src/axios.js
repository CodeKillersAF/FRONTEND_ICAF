import axios from "axios";

const instance = axios.create({
    baseURL:'https://icaf-api-backend.herokuapp.com/api/'
})

export default instance;