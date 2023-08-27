import React, { useEffect } from 'react'
import { FaDesktop } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CategoryCoursesItem from '../../components/categoryCourse/CategoryCoursesItem';
import Banner from '../../components/global/Banner';
import { fetchApiCategoryCoursesAction } from '../../redux/action/courseListAction';

const CategoryPage = () => {

  const dispatch = useDispatch();
  const params = useParams();

  // lấy danh mục khóa học từ reducer
  const { categoryList } = useSelector(state => state.courseList);


  useEffect(() => {
    dispatch(fetchApiCategoryCoursesAction(params.id));

    window.scrollTo(0, 0);

  }, [params.id])

  const bannerContent = { title: 'KHÓA HỌC THEO DANH MỤC', text: 'HÃY CHỌN KHÓA HỌC MONG MUỐN !!!' }

  return (
    <div>
      <Banner bannerContent={bannerContent} />
      <div className="container mx-auto pb-10">

        <h1 className='mt-10 mb-5 py-2 px-5 text-lg capitalize border-2 border-solid border-gray-400 rounded-[30px] inline-block mb-10 hover:border-gray-600 transition-all duration-300 cursor-pointer'>
          <FaDesktop className='text-pink-600 mr-3 text-xl inline-block' />
          <span className='text-[16px] font-semibold'>
            {
              categoryList.map(ele => {
                if (ele.maDanhMuc === params.id) {
                  return ele.tenDanhMuc
                }
              })
            }
          </span>
        </h1>

        <CategoryCoursesItem />
      </div>
    </div>
  )
}

export default CategoryPage