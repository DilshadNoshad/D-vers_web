import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header>
      <nav>
        <div className="navbar">
          <i className="fal fa-bars"></i>
          <div className="logo">
            <a href="index.html"><img src="img/D-vers.png" alt="" /></a>
          </div>
          <div className="nav-links">
            <div className="sidebar-logo">
              <span className="logo-name">D-vers</span>
              <i className="fal fa-times"></i>
            </div>
            <ul className="menus">
              <li><a className="line" href="index.html">home</a></li>
              <li><a className="line" href="#">blogs</a></li>
              <li>
                <a className="line" href="#">Portfolio</a>
              </li>
              <li>
                <div className="button r" id="button-4">
                  <input id="chk" type="checkbox" className="checkbox" />
                  <div className="knobs"></div>
                  <div className="layer"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
        );
    }
}

export default Header;