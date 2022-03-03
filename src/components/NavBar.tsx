
import React from 'react'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const NavBar = () => {
  return (
    <nav className='topnav'>
      <div className='nav-menu nav-items'>
        <MenuIcon/>
      </div>
      <div className='nav-title nav-items'>
        Zerla
      </div>
      <div className='nav-search nav-items'>
        <SearchIcon/>
      </div>
      <div className='nav-user nav-items'>
         <PersonOutlineIcon/>
      </div>
      <div className='nav-cart nav-items'>
         <ShoppingBagIcon/> 
      </div>
    </nav>
  )
}

export default NavBar