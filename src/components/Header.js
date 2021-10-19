import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const allowScroll = () => {
    document.body.style.overflow='visible'
  }
  const preventScroll = () => {
    document.body.style.overflow='hidden'
  }

  return (
    <div className="header-wrap" >
      <div className="header">
        <Link onClick={preventScroll} className="home-btn" to='/'>let me <span className="home-btn-dot">=</span> 'MARK' </Link>
        <div className="nav-links">
          <Link onClick={allowScroll} to='/news'>News</Link>
          <Link onClick={allowScroll} to='/library'>Library</Link>
        </div>
      </div>
    </div>
  );
}


export default Header;