import React from 'react';

import './available.scss';

const Available = () => {
  return (
    <span
      className='card__available'
    >
      Чего сидишь? Порадуй котэ,&nbsp;
      <a href='/' className='card__available-link'>купи</a>
      <span className='card__available-link__dot'>.</span>
    </span>
  )
}

export default Available;