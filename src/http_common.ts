import axios from "axios";

export default axios.create({
    baseURL: "http://local.laravel.vpu912.com:100/",
    headers: {
        "Content-type": "application/json"
      }
});