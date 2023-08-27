import React from 'react';
import styles from './AboutSlide.module.scss';
import clsx from 'clsx';

const AboutSlide = () => {
  return (
    <div className={clsx(styles.aboutSlide)}>
        <div className={styles.aboutItem}>
            <h3>E LEARNING HỌC LÀ VUI</h3>
            <h1>Cùng nhau khám phá nhưng điều mới mẻ</h1>
            <p>Học đi đôi với hành</p>
        </div>
    </div>
  )
}

export default AboutSlide