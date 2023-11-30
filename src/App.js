import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Login from "./pages/Login";
import Disciplina from "./pages/Disciplina";
import UpdateUsuario from "./pages/UpdateUsuario";
import UpdateCurso from "./pages/UpdateCurso";
import UpdateDisciplina from "./pages/UpdateDis";
import VincularDis from "./pages/VincularDis";
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
        <Route path="/disciplinas" exact element={ <Disciplina/> } />
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/vincular" exact element={ <VincularDis /> } />
        <Route path="/updateUser" exact element={ <UpdateUsuario /> } />
        <Route path="/updateCurso" exact element={ <UpdateCurso /> } />
        <Route path="/updateDisciplina" exact element={ <UpdateDisciplina /> } />
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

