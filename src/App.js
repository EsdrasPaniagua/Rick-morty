import './App.css';
import Form from './components/form';
import Cards from './components/Cards.jsx';
import Nav from './components/nav';
import About from "./components/About";
import Detail from './components/details';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate } from "react-router-dom";;


const UR_BASE = "https://be-a-rym.up.railway.app/api/character";
const APY_KEY = "ed425a4b96c7.b4394f78ee82fba658cc";

const email = "esdras@gmail.com"
const password = "123asd"

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate("/")
   }, [access])

   const onSearch = (id) => {
      axios(`${UR_BASE}/${id}?key=${APY_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }


   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)

   }

  

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />
         }

         <Routes>
            <Route path = "/" element={<Form login={login}/>}/>
            <Route path = "/home" element={<Cards characters={characters} onClose={onClose}/> }/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
