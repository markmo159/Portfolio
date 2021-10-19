import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrap" >
      <div className=" header">
        <Link className="home-btn" to='/'>let me <span className="home-btn-dot">=</span> 'MARK' </Link>
        <div className="nav-links">
          <Link to='/news'>News</Link>
          <Link to='/library'>Library</Link>
        </div>
      </div>
    </div>
  );
}


export default Header;