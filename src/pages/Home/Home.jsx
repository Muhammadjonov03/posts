import React from 'react'
import { Content, Sidebar } from '../../Components'
import style from './Home.module.css'

const Home = (props) => {
  return (
    <div className={style.homeWrapper}>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default Home