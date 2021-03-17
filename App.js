import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {FaCheckCircle, FaTrash , FaPen} from 'react-icons/fa';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('');

  useEffect(()=> {
    listarDados()
  }, []) 

  async function listarDados(){

    const res = await axios.get('http://localhost/apiReact/usuarios.php');
    setLista(res.data);
    console.log(res.data);
  }

  return(

    <div>
      teste
      </div>
  )
 
}

export default App;




