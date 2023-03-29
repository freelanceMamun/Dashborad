import React from 'react';
import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/navbar/navbar';
import Widgets from '../../components/widgets/widgets';
import Featurechart from '../../components/featurechart/featurechart';
import Chart from '../../components/chart/Chart';
import Tabel from '../../components/Tabel/Tabel';
const Home = () => {
  return (
    <div className="home">
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        <div className="widgets">
          <Widgets type={'user'} />
          <Widgets type={'order'} />
          <Widgets type={'erarning'} />
          <Widgets type={'balance'} />
        </div>
        <div className="charts">
          <Featurechart></Featurechart>
          <Chart aspect={2 / 1} titel="Last 6 Months (Revinew)"></Chart>
        </div>
        <div className="ListContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tabel />
        </div>
      </div>
    </div>
  );
};

export default Home;
