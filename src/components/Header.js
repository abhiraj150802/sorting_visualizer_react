import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      {/* <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Frontend Developer</h3>
        <div className="header__bar__icons"> */}
         
        {/* </div>
      </div> */}

      <div className="header-logo">Algo<span>Visuals</span></div>
      <div className="header__options">
         <h3 className="header__option" onClick = {contactHandler}></h3>
      </div>
   </div>
  )
}

export default Header;