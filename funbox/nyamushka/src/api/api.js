import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/a-bodrova/funbox/nyamushka',
})

export const getGoods = async () => {
  return await (await api.get('/funbox/nyamushka/public/db.json')).data;
}