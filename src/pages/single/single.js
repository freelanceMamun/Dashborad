import React from 'react';
import './single.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/navbar/navbar';
import user from '../../asset/gamer.png';
import Chart from '../../components/chart/Chart';
import Tabel from '../../components/Tabel/Tabel';
const single = () => {
  return (
    <div className="single">
      <Sidebar></Sidebar>
      <div className="singleContainer">
        <Navbar></Navbar>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={user} className="itemImg" alt=""></img>
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailsItem">
                  <span className="itemkey">Email:</span>
                  <span className="itemValue">Janedoe@gmail.com</span>
                </div>
                <div className="detailsItem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemValue">+123 465 679</span>
                </div>
                <div className="detailsItem">
                  <span className="itemkey">Address:</span>
                  <span className="itemValue">
                    Elton ST. 234 Garden Yd New York
                  </span>
                </div>
                <div className="detailsItem">
                  <span className="itemkey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart
              aspect={3 / 1}
              titel={'User Spending Last (6 Months)'}
            ></Chart>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Tabel></Tabel>
        </div>
      </div>
    </div>
  );
};

export default single;
