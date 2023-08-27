import React, { useEffect } from 'react'
import BlogContent from '../../components/blog/BlogContent'
import Banner from '../../components/global/Banner'

const Blog = (props) => {
    const bannerContent = {title: 'BLOG', text: 'THÔNG TIN CÔNG NGHỆ SỐ !!!'};

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  return (
    <div>
        <Banner bannerContent={bannerContent} />
        <BlogContent />
    </div>
  )
}

export default Blog