import React from 'react'
import "./Content.css"
import ContentTop from '../../Components/contentTop/ContentTop'
import ContentMain from '../../Components/contentMain/ContentMain'

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop/>
      <ContentMain/>
    </div>
  )
}

export default Content
