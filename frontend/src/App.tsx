import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path={'/login'} element={ <Login /> } />
        <Route path={'/'} element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
