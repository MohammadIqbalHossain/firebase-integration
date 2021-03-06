import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register'
import Orders from './Components/Orders/Orders';
import RequireAuth from './Components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/register' element={<Register />}></Route>
         <Route path='/orders' element={
           <RequireAuth>
             <Orders />
           </RequireAuth>
         }></Route>
       </Routes>
    </div>
  );
}

export default App;
