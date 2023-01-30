import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Messenger from './components/Messenger/Messenger';
import Notifications from './components/Notifications/Notifications';
import Profile from './components/Profile/Profile';
import UniqItem from './components/UniqItem/UniqItem';
import HomeWrapper from './pages/HomeWrapper';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<HomeWrapper />} >
          <Route index element={<Main/>}/>
          <Route path=':id/uniq' element={<UniqItem />} />
          <Route path='messenger' element={<Messenger />} />
          <Route path='notification' element={<Notifications />} />
          <Route path='explore' element={<Explore />} />
          <Route path='profile' element={<Profile />} />
          <Route path='create' element={<CreatePost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
