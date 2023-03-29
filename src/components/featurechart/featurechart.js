import React from 'react';
import './featureChart.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const featurechart = () => {
  return (
    <div className="Featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon></MoreVertOutlinedIcon>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={70}
            text="70%"
            strokeWidth={4}
          ></CircularProgressbar>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$520</p>
        <p className="desc">
          Previous transactions processing. Last payment may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmout">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmout">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmout">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featurechart;
