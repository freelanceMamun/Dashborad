import React from 'react';
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const widgets = ({ type }) => {
  let data;

  // * Temporary
  const amount = 100;
  const diff = 20;
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See al users',
        icon: (
          <PersonOutlineOutlinedIcon
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
            className="icon"
          ></PersonOutlineOutlinedIcon>
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
            className="icon"
          ></ShoppingCartOutlinedIcon>
        ),
      };
      break;
    case 'erarning':
      data = {
        title: 'ERARNING',
        isMoney: true,
        link: 'View all erarning',
        icon: (
          <MonetizationOnOutlinedIcon
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
            className="icon"
          ></MonetizationOnOutlinedIcon>
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
            className="icon"
          ></AccountBalanceWalletOutlinedIcon>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="Counter">
          {data.isMoney && '$'}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default widgets;
