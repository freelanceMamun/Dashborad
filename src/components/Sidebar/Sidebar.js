import React, { useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkmodeContext';
const decoration = {
  textDecoration: 'none',
};
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={decoration}>
          <span className="logo">lamaAdmin</span>
        </Link>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="Title">MAN</p>
          <li>
            <DashboardIcon className="Icon"></DashboardIcon>
            <span>Dashboard</span>
          </li>
          <p className="Title">LIST</p>
          <Link to="/users" style={decoration}>
            <li>
              <PersonOutlineOutlinedIcon className="Icon"></PersonOutlineOutlinedIcon>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={decoration}>
            <li>
              <StoreIcon className="Icon"></StoreIcon>
              <span>Products</span>
            </li>
          </Link>

          <li>
            <CreditCardIcon className="Icon"></CreditCardIcon>
            <span>Orders</span>
          </li>
          <li>
            <AirportShuttleIcon className="Icon"></AirportShuttleIcon>
            <span>Delivery</span>
          </li>
          <p className="Title">USEFULL</p>
          <li>
            <InsertChartIcon className="Icon"></InsertChartIcon>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="Icon"></NotificationsNoneOutlinedIcon>
            <span>Notifications</span>
          </li>
          <p className="Title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="Icon"></SettingsSystemDaydreamOutlinedIcon>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="Icon"></PsychologyOutlinedIcon>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="Icon"></SettingsApplicationsIcon>
            <span>Settings</span>
          </li>
          <p className="Title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="Icon"></AccountCircleOutlinedIcon>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="Icon"></ExitToAppOutlinedIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: 'Light' })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: 'Dark' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
