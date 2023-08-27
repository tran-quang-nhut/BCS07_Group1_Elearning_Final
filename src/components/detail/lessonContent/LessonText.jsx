import React from 'react'
import { BsClockFill, BsFillPlayCircleFill } from 'react-icons/bs';
import styles from './LessonContent.module.scss'

const LessonText = (props) => {
    return (
        <div className={styles.lessonContainer}>
            <div>
                <BsFillPlayCircleFill className='inline-block text-xl mr-3 text-green-600' />
                <span className='text-[1rem] font-medium text-gray-500'>{props.content}</span>
            </div>
            <div>
                <BsClockFill className='inline-block text-xl mr-3 text-green-600' />
                <span className='text-[1rem] font-medium text-gray-500'>{props.time}</span>
            </div>
        </div>
    )
}

export default LessonText