import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 2%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // manual
  // const consultaAPI = () => {
  //   const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
  //   const frase = api.then( respuesta => {
  //     return respuesta.json();
  //   });
  //   frase.then(resultado => console.log(resultado));
  // }

  // async
  const consultaAPI = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = await api.json();
    //console.log(frase[0]);
    guardarFrase(frase[0]);
  }

  const [frase, guardarFrase] = useState({});

  useEffect(() => {
    consultaAPI(); 
  }, [])

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultaAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
