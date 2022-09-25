import { Route,Routes } from 'react-router-dom';
import './App.css';
import EventInfoPage from './components/eventInfo';
import EventPage from './components/Events';
import TeamPage from './components/team';
import Home from './components/homePage';
function App() {
  return (
    <div
     className="App"
     >
    
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/events' element={ <EventPage/> } />
        <Route path='/events/eventInfo' element={ <EventInfoPage/> } />
        <Route path='/team' element={ <TeamPage/> } />
      </Routes>
    </div>
  );
}

export default App;
