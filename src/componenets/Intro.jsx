import React from 'react';
import introTopImg from "../assets/images/intro-top.png"
import introBottomImg from "../assets/images/intro-bottom.png"
import "../assets/style/intro.scss"
const Intro = () => {
  return (
    <div className='intro container'>
      <div className='intro__left'>
        <h2 className='intro__left-title'>
          New Laptop
        </h2>
        <p className='intro__left-subtext'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <button className='intro__left-button'>
          Shop now
        </button>
      </div>
      <div className='intro__right'>
        <img className='intro__right-img-bottom' src={introBottomImg} alt="" />
      </div>
        <img className='intro__right-img-top' src={introTopImg} alt="" />
    </div>
  )
}

export default Intro