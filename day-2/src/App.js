import {Routes,Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
  <div>
    
    <Routes>
      <Route path='/' element={<AllMeetupsPage />}/>
    </Routes>
    <Routes>
      <Route path='/new-meetup' element={<NewMeetupPage />}/>
    </Routes>
    <Routes>
      <Route path='/favorites' element={<FavoritesPage />}/>
    </Routes>
      
  </div>
  );
}

export default App;
