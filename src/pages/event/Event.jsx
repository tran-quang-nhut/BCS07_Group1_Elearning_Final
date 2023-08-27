import React, { useEffect } from 'react'
import EventContent from '../../components/event/EventContent'
import EventSlide from '../../components/event/EventSlide'

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <EventSlide />
      <EventContent />
    </div>
  )
}

export default Event