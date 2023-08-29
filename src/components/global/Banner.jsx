import React from 'react';
import styles from './Banner.module.scss'

const Banner = (props) => {
  return (
    <div className={styles.banner}>
        <div className="container mx-auto px-10">
            <h1 className='text-3xl text-white font-bold uppercase'>{props.bannerContent.title}</h1>
            <p className='uppercase text-white text-sm mt-2'>{props.bannerContent.text}</p>
            <div className={styles.box1}></div>
            <div className={styles.box1}></div>
            <div className={styles.box1}></div>
        </div>
    </div>
  )
}

export default Banner