import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Login from "./pages/Login";
import UserDashboard from "./pagesUser/UserDashboard";
import ChatUpload from "./pagesUser/ChatUpload";
import Navbar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import UserPage from './pagesUser/UserPage';
import CreationPage from './pagesUser/CreationPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" exact element={ <Inicio/> } />
        <Route path="/cursos" exact element={ <Cursos/> } />
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/cadastro" exact element={ <Cadastro /> } />
        <Route path="/chatUpload" exact element={ <ChatUpload /> } />
        <Route path="/userDashboard" exact element={ <UserDashboard /> } />
        <Route path="/userPage" exact element={ <UserPage /> } />
        <Route path="/creationPage" exact element={ <CreationPage /> } />

      </Routes>
    </Router>
  );
}

export default App;

