import { Col, Row } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/global/Banner';
import SearchFilter from '../../components/search/SearchFilter';
import SearchResults from '../../components/search/SearchResults';
import coursesService from '../../services/courseService';


const SearchPage = () => {

  const [resultSearch, setResultSearch] = useState(null);
  const params = useParams();

  // call api tim kiem khoa hoc
  const handleFetchApiSearch = async () => {
    try {
      const res = await coursesService.fetchApiSearchCourse(params.key);
      setResultSearch(res.data);
    } catch (err) {
      setResultSearch(null);
    }
  }


  useEffect(() => {
    handleFetchApiSearch();
  }, [params])
  

  const bannerContent = { title: 'TÌM KIẾM KHÓA HỌC', text: 'KẾT QUẢ TÌM KIẾM KHÓA HỌC !!!' }

  return (
    <div>
      <Banner bannerContent={bannerContent} />
      <div className="container mx-auto py-10">
        <Row>
          <Col xs={8} lg={6}>
            <SearchFilter />
          </Col>
          <Col className='px-5' xs={16} lg={18}>
            <SearchResults resultSearch={resultSearch} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SearchPage