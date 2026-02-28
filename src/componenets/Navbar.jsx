import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/style/navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar container'>
      <h2 className='navbar__title'>
        BrandLogo
      </h2>
      <ul className='navbar__list'>
        <li>
          <NavLink className={"navbar__link"} to={"/"}>Bosh sahifa</NavLink>
        </li>
        <li>
          <NavLink className={"navbar__link"} to={"/"}>Katalog</NavLink>
        </li>
        <li>
          <NavLink className={"navbar__link"} to={"/"}>Haqimizda</NavLink>
        </li>
        <li>
          <NavLink className={"navbar__link"} to={"/"}>Aloqa</NavLink>
        </li>
      </ul>
      <div className='navbar__right'>
        <form className='navbar__form'>
          <div className='navbar__form-box'>
            <input className='navbar__input' placeholder='Siz nima qidiryapsiz?' type="text" />
            <svg className='navbar__form-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          </div>
        </form>
        <button className='navbar__button'>
          <span className='navbar__span'>
            <svg className='navbar__button-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
            <p className='navbar__span-t'>
              Aloqaga chiqish
            </p>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Navbar