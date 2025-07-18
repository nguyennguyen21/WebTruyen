import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import DetailCM from './pages/Detailchapter';
import History from './pages/History';
import ChangePW from './pages/Changepassword';
import BoolCM from './pages/censorcomic';
import ReadComic from './pages/ReadCM';

//component
import Header from './modules/components/Header/header'
import Fooster from './modules/components/fooster/fooster';
import Login from './modules/components/users/Login/Login';
import AuthUpdater from './modules/components/Auth/authUpdate';

import  {ROUTES}  from './modules/config/routes';

import './App.css'


function App() {
  return (
    <BrowserRouter>
    <AuthUpdater/>
    <Header />
     
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path={ROUTES.DETAIL_CM} element={<DetailCM/>}/>
        <Route path= {ROUTES.HISTORY} element={<History/>}/>
        <Route path={ROUTES.LOGIN} element={<Login isLogin={true|false} />} />
        <Route path={ROUTES.REGISTER} element={<Login isLogin={false|true} />} />
        <Route path={ROUTES.CHANGE_PASSWORD} element={<History/>}/>
        <Route path={ROUTES.CENSOR} element={<BoolCM/>} />
        <Route path={ROUTES.ReadCOMMIC} element={<ReadComic/>} />
      </Routes>
      <Fooster/>
    </BrowserRouter>
  )
}

export default App
