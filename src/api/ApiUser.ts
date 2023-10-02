import axios, { Method } from 'axios';
import { IUsers } from '../type/IUsers';
export const instanceUser = axios.create({
  baseURL: 'http://localhost:3002/'
});

export const userAxios = async (url: string, method: Method, body?: IUsers) => {
  try {
    let data;
    switch (method) {
      case 'GET':
        data = await instanceUser.get(url);
        break;
      case 'POST':
        data = await instanceUser.post(url, body);
        break;
      case 'PUT':
        data = await instanceUser.put(url, body);
        break;
      case 'DELETE':
        data = await instanceUser.delete(url);
        break;
      default:
        break;
    }
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};
