import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import IMAGES from '../../images'
import { selectSearchTxt, toggleSearchTxt } from '../../store/slices/searchTxt/searchTxtSlice'


function Navbar() {
  const { pathname } = useLocation()
  console.log(pathname);
  const dispatch = useDispatch()
  const searchTxt = useSelector(selectSearchTxt)
  return (
    <nav className="navbar">
        <div className="nav-wrapper">
            <NavLink to='/'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
            {pathname === '/' && <input type="text" value={searchTxt} onChange={(e) => dispatch(toggleSearchTxt(e.target.value)) } className="search-box" placeholder="Search"/>}
            <div className="nav-items">
                <NavLink to='/'><img src={IMAGES.home} className="icon" alt=""/> </NavLink>
                <NavLink to='/messenger'><img src={IMAGES.messenger} className="icon" alt=""/> </NavLink>
                <NavLink to='/create'><img src={IMAGES.add} className="icon" alt=""/></NavLink>
                <NavLink to='/explore'><img src={IMAGES.explore} className="icon" alt=""/></NavLink>
                <NavLink to='/notification'><img src={IMAGES.like} className="icon" alt=""/></NavLink>
                <NavLink to='/profile'><img src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`} alt='' className="icon user-profile" /></NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar