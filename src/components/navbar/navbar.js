import React, { useContext } from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Logo from '../../asset/gamer.png';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkModeContext } from '../../context/darkmodeContext';

const Navbar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."></input>
          <SearchOutlinedIcon></SearchOutlinedIcon>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"></LanguageOutlinedIcon>
            English
          </div>
          <div className="item" style={{ cursor: 'pointer' }}>
            {darkMode ? (
              <LightModeOutlinedIcon
                onClick={() => dispatch({ type: 'Light' })}
                className="icon"
              ></LightModeOutlinedIcon>
            ) : (
              <DarkModeOutlinedIcon
                onClick={() => dispatch({ type: 'Dark' })}
                className="icon"
              ></DarkModeOutlinedIcon>
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"></FullscreenExitOutlinedIcon>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"></NotificationsNoneOutlinedIcon>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"></ChatBubbleOutlineOutlinedIcon>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"></ListOutlinedIcon>
          </div>
          <div className="item">
            <img src={Logo} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
