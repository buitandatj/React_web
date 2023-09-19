import axios, { Method } from 'axios';
import { IState } from '../context/productContext';
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const myAxios = async (url: string, method: Method, body?: IState) => {
  try {
    let data;
    switch (method) {
      case 'GET':
        data = await instance.get(url);
        break;
      case 'POST':
        data = await instance.post(url, body);
        break;
      case 'PUT':
        data = await instance.put(url, body);
        break;
      case 'DELETE':
        data = await instance.delete(url);
        break;
      default:
        break;
    }
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};
