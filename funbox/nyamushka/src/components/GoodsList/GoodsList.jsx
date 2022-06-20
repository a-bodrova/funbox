import React, { useEffect, useState } from 'react';

import './goods-list.scss';
import Card from '../Card/Card';
import { goodsList } from '../../constants';
import { getGoods } from '../../api/api';

const GoodsList = () => {
  const [goods, setGoods] = useState([]);
  
  useEffect(() => {
    const getGoodsList = async () => {
      const data = await getGoods();

      setGoods(data);
    }
    getGoodsList();
  }, [])

  return (
    <main className='cards'>
      <h1 className='cards__title'>{goodsList.title}</h1>
      <ul className='cards__list list'>
        {
          goods.map(good => <Card info={good} key={good.id} />)
        }
      </ul>
    </main>
  )
}

export default GoodsList;