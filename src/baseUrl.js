import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL: process.env.baseUrl || "http://192.168.1.4:8000",

});
export default axiosBaseURL;

// export const baseUrl = process.env.baseUrl || "https://travellinknepal.onvirotech.com";
export const baseUrl = process.env.baseUrl || "http://192.168.1.4:8000";