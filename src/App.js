import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Followers from './pages/Followers/Followers';
import Repos from './pages/Repos/Repos';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
     <div>
       <Router>
         <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/repos/:repos/:username" element={<Repos />}/>
          <Route exact path="/followers/:followers/:username" element={<Followers />}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
       </Router> 
     </div>
  );
}

export default App;
