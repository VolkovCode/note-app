import './App.css';
import Header from './components/Header';
import NotesListPages from './pages/NotesListPages';
import { 
  BrowserRouter as Router,
  Route,   
  Routes
} from 'react-router-dom'
import NotePage from './pages/NotePage';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' exact element={<NotesListPages />} />
      <Route path='/notes/:id' element={<NotePage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
