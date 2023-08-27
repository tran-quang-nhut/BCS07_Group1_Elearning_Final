import React, { useEffect } from 'react'
import AboutContent from '../../components/about/AboutContent'
import AboutSlide from '../../components/about/AboutSlide'

const Information = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AboutSlide />
      <AboutContent />
    </div>
  )
}

export default Information