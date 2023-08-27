import React from 'react';
import styles from './LessonContent.module.scss';
import LessonText from './LessonText';

const LessonContent = () => {
    const lessonContainer = [
        {
            lesson: 'MỤC 1: GIỚI THIỆU', title: 'Bài học', lessonDetail: [
                { content: 'Các khái niệm về React Component', time: '14:00' },
                { content: 'Thiết lập môi trường cho Windows', time: '16:00' },
                { content: 'Tạo ứng dụng React - React-Scripts', time: '14:45' },
                { content: 'Ghi chú nhanh về dấu ngoặc kép cho string interpolation', time: '12:40' },
            ]
        },
        {
            lesson: 'MỤC 2: KIẾN THỨC CĂN BẢN', title: 'Bài học', lessonDetail: [
                { content: 'Trang chủ và thành phần thư mục', time: '18:00' },
                { content: 'Hướng dẫn khóa học + Liên kết Github', time: '26:00' },
                { content: 'Trang chủ thương mại điện tử + thiết lập SASS', time: '14:45' },
                { content: 'Tệp CSS và SCSS', time: '10:35' },
                { content: 'React 17: Cập nhật các gói + Phiên bản React mới nhất', time: '30:35' },
            ]
        },
        {
            lesson: 'MỤC 3: KIẾN THỨC CHUYÊN SÂU', title: 'Bài học', lessonDetail: [
                { content: 'connect() and mapStateToProps', time: '18:00' },
                { content: 'Trạng thái thư mục vào Redux', time: '26:00' },
                { content: 'Thành phần Tổng quan về Bộ sưu tập', time: '14:45' },
            ]
        },

    ]

    return (
        <div className={styles.contentCourse}>
            <h2 className='my-5 text-xl font-semibold'>Nội Dung Khóa Học</h2>

            {lessonContainer.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='flex items-center bg-slate-100 py-3 px-2 my-5'>
                            <h1 className='text-2xl mr-5'>{item.lesson}</h1>
                            <button className={styles.btnView}><span>Xem Trước</span></button>
                        </div>
                        <h3 className='text-lg font-medium mb-2'>{item.title}</h3>
                        {item.lessonDetail.map((ele, index) => {
                            return (
                                <LessonText key={index} content={ele.content} time={ele.time} />
                            )
                        })}

                    </div>
                )
            })}

        </div>
    )
}

export default LessonContent