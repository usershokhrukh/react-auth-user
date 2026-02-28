import React from 'react'
import "../assets/style/top-Header.scss"
const TopHeader = () => {
  return (
    <div className='top-header container'>
      <div className='top-header__left'>
        <p className='top-header__text'>
          Shahar:Toshkent
        </p>
      </div>
      <p className='top-header__text'>
        Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida
      </p>
      <select className='top-header__select' name="" id="">
        <option className='top-header__option' value="uz">Uzbek</option>
      </select>
    </div>
  )
}

export default TopHeader