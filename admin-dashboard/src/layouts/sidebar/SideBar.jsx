import React, { useContext, useEffect, useState } from 'react'
import "./SideBar.css"
import {personsImgs} from "../../utils/images"
import {navigationLinks} from "../../data/data"
import { SidebarContext } from '../../context/sidebarContext';
const SideBar = () => {
    const[activeLinkIdx] = useState(1);
    const [sidebarClass, setSidebarClass] = useState("")
    const{isSidebarOpen }= useContext(SidebarContext);

    useEffect(()=>{
        if(isSidebarOpen){
            setSidebarClass("sidebar-change")
        }else{
            setSidebarClass("")
        }
    },[isSidebarOpen])
  return (
    <div className={`sidebar ${sidebarClass}`}>
        <div className="user-info">
            <div className="info-img img-fit-cover">
                <img src={personsImgs.person_two} alt="profile image" />
            </div>
            <span className="info-name">alice-doe</span>
        </div>
      <nav className="navigation">
        <ul className="nav-list">
            {
                navigationLinks.map((navigationLinks)=>(
                    <li className="nav-item" key={navigationLinks.id}>
                        <a href="#" className={`nav-link ${navigationLinks.id === activeLinkIdx ? 'active': null}`}>
                            <img src={navigationLinks.image} className='nav-link-icon' alt={navigationLinks.title} />
                            <span className="nav-link-text">
                                {navigationLinks.title}
                            </span>
                        </a>
                    </li>
                ))
            }
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
