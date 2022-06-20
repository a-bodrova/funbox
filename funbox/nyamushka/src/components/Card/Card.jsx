import React, { useState } from 'react';

import './card.scss';
import Available from '../Available/Available';
import Unavailable from '../Unavailable/Unavailable';

const Card = ({ info }) => {

  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      setIsHovered(false);
    }
  }

  const handleLeave = () => {
    if (isChecked) {
      setIsHovered(true);
    }
  }


  return (
    <li className='card__wrapper'>
    <div
      className={`list__item card ${isChecked && 'active'} ${isHovered && 'hovered'} ${!info.available && 'disabled'}`}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <div className='card__inner-wrapper'>
        <div className='card__image'>
          <span className='card__description'>{info.tagline}</span>
          <h2 className='card__title'>{info.title}</h2>
          <span className='card__flavor'>{info.flavor}</span>
          <div className='card__combo combo'>
            <span className='combo__serving'>{info.serving}</span>
            <span className='combo__gift'>{info.gift}</span>
            {
              info.xxl &&
              <span className='combo__xxl'>{info.xxl}</span>
            }
          </div>
          <div className='card__weight-badge weight-badge'>
            <span className='weight-badge__weight'>{info.weight}</span>
            <span className='weight-badge__units'>{info.weightUnits}</span>
          </div>
        </div>
      </div>
    </div>
    {
      info.available
      ?
      <Available checked={isChecked} />
      :
      <Unavailable flavor={info.flavor} />
    }
    </li>
  )
}

export default Card;