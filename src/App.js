import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import Login from './pages/Login'
import User from './scenes/user/User';
import Dashboard from './scenes/dashboard/Dashboard';
import Index from './scenes/products/Index';
import Blog from './scenes/blog/Blog';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <div className='app'> 
      <Routes>
          <Route path="/" element={<Home/>}>
            <Route path ="/user" element={<User/>}/>
            <Route path ="/dashboard" element={<Dashboard/>}/>
            <Route path ="/product" element={<Index/>}/>
            <Route path='/blog' element={<Blog/>}/>
            </Route>
            <Route path='login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
