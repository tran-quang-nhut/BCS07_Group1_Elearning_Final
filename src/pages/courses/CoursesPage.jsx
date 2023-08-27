import React, { useEffect } from 'react'
import { FaBookmark } from 'react-icons/fa'
import CourseShowTime from '../../components/coursesPage/CourseShowTime'
import Banner from '../../components/global/Banner'
import PopularCourses from '../../components/home/PopularCourses';

const CoursesPage = () => {
    const bannerContent = { title: 'KHÓA HỌC', text: 'BẮT ĐẦU HÀNH TRÌNH NÀO !!!' }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Banner bannerContent={bannerContent} />

            <div className="container mx-auto pb-10 px-5 lg:px-0">
                <CourseShowTime />
                <h1 className='ml-5 py-2 px-5 text-lg uppercase border-2 border-solid border-gray-400 rounded-[30px] inline-block mb-10 hover:border-gray-600 transition-all duration-300 cursor-pointer'><FaBookmark className='text-pink-600 mr-3 text-xl inline-block' /> <span className='text-[16px] font-semibold'>Danh Sách Khóa Học</span></h1>
                <PopularCourses />
            </div>
        </div>
    )
}

export default CoursesPage