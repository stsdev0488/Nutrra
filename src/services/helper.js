import axios from 'axios';
import { API_URL } from '../configs';

/**
 * Create Axios Request handler
 * @param {string} target
 * @param {string} method
 * @param {object} data
 */
const apiHandler = (requestType, url, data = undefined) =>
  axios({
    baseURL: API_URL,
    url,
    method: requestType,
    headers: { 'Content-Type': 'application/json' },
    data,
  });

export default apiHandler;
