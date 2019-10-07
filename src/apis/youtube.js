import axios from 'axios';
/*const KEY = 'AIzaSyC2eUwLjpH9_8s-SdqkABUhSaz0xi9wXTI';

export const baseParams = {
        part: 'snippet',
        maxResults: 5,
        key: KEY
};*/

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
});