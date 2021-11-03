import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrap" >
      <div className=" header d-f jc-sb ai-c">
        <Link className="btn-home font-color-2" to='/'>let me <span className="font-color-danger">=</span> 'MARK' </Link>
        <div className="nav-links d-f jc-sb">
          <Link className='font-color-2' to='/news'>News</Link>
          <Link className='font-color-2' to='/library'>Library</Link>
        </div>
      </div>
    </div>
  );
}


export default Header;