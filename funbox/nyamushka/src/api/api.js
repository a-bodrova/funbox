import axios from 'axios';

const api = axios.create({
  baseURL: '/',
})

export const getGoods = async () => {
  return await (await api.get('/db.json')).data;
}