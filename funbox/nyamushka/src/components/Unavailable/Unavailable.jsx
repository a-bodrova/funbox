import React from 'react';

import './unavailable.scss';

const Unavailable = ({ flavor }) => {
  return (
    <span className='card__unavailable'>Печалька, {flavor} закончился.</span>
  )
}

export default Unavailable;