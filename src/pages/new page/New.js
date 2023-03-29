import React, { useState } from 'react';
import './new.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/navbar/navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
const New = ({ title, inputs }) => {
  const [file, setFile] = useState(null);

  console.log(file);
  return (
    <div className="new">
      <Sidebar></Sidebar>
      <div className="newContainr">
        <Navbar></Navbar>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://blockbusterbd.com//uploads/movies/posters/noimage.jpg'
              }
              alt=""
              className="userimg"
            ></img>
          </div>
          <div className="right">
            <form>
              <div className="fromInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon"></DriveFolderUploadOutlinedIcon>
                </label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  id="file"
                  hidden
                ></input>
              </div>
              {inputs.map((input) => {
                return (
                  <div key={input.id} className="fromInput">
                    <label htmlFor={input.label}> {input.label}</label>
                    <input
                      type={input.type}
                      id={input.label}
                      placeholder={input.placeholder}
                    ></input>
                  </div>
                );
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
