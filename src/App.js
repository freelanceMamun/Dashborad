import { useContext } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import List from './pages/list/list';
import Single from './pages/single/single';
import New from './pages/new page/New';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userInputs, productInputs } from './formSource';
import { DarkModeContext } from './context/darkmodeContext';
import './style/dark.scss';
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'App dark ' : 'App'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userID" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              ></Route>
            </Route>

            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productID" element={<Single />}></Route>
              <Route
                path="new"
                element={
                  <New inputs={productInputs} title={'Add New Product'} />
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
