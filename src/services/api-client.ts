import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4b8d503a0528436ea6c4ae4e7c258d59'
    }
})