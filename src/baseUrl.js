import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL: process.env.baseUrl || "https://travellinknepal.onvirotech.com",

});
export default axiosBaseURL;

export const baseUrl = process.env.baseUrl || "https://travellinknepal.onvirotech.com";