import React from 'react';
import './list.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/navbar/navbar';
import DataTabel from '../../components/dataTable/DataTabel';
const list = () => {
  return (
    <div className="list">
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <DataTabel></DataTabel>
      </div>
    </div>
  );
};

export default list;
