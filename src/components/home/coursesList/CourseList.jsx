import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './CourseList.scss'
import { fetchApiCoursesWithCategoryAction } from '../../../redux/action/courseListAction';
import CoursesSlide from './CoursesSlide';


const CourseList = (props) => {
  const dispatch = useDispatch();

  const categoryList = useSelector(state => state.courseList.categoryList);
  const coursesList = useSelector(state => state.courseList.categoryCourse);

  const onChange = (key) => {
    dispatch(fetchApiCoursesWithCategoryAction(key));
  };

  useEffect(() => {
    dispatch(fetchApiCoursesWithCategoryAction('BackEnd'));
  }, [])


  // render tabs content
  const items = categoryList.map(ele => {
    return {
      key: ele.maDanhMuc,
      label: <h1 className='lg:text-xl font-bold hover:text-purple-600 transition-all duration-300 bg-teal-200 rounded-3xl px-5 py-1'>{ele.tenDanhMuc}</h1>,
      children: <CoursesSlide item={coursesList} />,
    }
  });

  return (

    <Tabs size='large' defaultActiveKey={categoryList[0]?.maDanhMuc} items={items} onChange={onChange} />
  )
}

export default CourseList