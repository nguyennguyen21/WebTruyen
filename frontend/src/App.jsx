import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import DetailCM from './pages/Detailchapter';
import History from './pages/History';
import Header from './modules/components/Header/header'
import Fooster from './modules/components/fooster/fooster';
import Login from './modules/components/users/Login/Login';

import './App.css'


function App() {
  return (
    <BrowserRouter>
    <Header />
     
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/Home/DetailCM" element={<DetailCM />}></Route>
        <Route path="/Home/History" element={<History/>}></Route>
        <Route path="Home/Login/SignIn" element={<Login isLogin={true} />} />
        <Route path="Home/Login/SignUp" element={<Login isLogin={false} />} />
      </Routes>
      <Fooster/>
    </BrowserRouter>
  )
}

export default App
