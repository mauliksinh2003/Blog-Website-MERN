import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div className='container'>
      
        <p className="headerTitles text-center">
            Blog App
        </p>
        <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
 
    </div>
  )
}

export default Header;
