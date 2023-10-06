import axios, { Method } from 'axios';
import { IProducts } from '../type/IProducts';
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
export const instanceUser = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
export const myAxios = async (url: string, method: Method, param?: object, body?: IProducts) => {
  try {
    let data;
    switch (method) {
      case 'GET':
        data = await instance.get(url, param);
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
