import axios from 'axios'

 export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID glSnDJLeIr16573Q1IOLoJcI7ER0uDWZ1TEsJi74Je4'
    }
})