import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"d6911f4ad2de47e09ab3eb6f6b016f0c"
    }
})