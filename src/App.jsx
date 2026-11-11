import React from 'react'
import Tarjeta from './components/Tarjeta/Tarjeta'
import './App.css'
import abogado_img from '@assets/abogado.jpeg'
import ing_img from '@assets/ing.jpeg'
import medico_img from '@assets/medico.jpeg'


export default function App() {

  return (
    <div className='contenedor-tarjetas'> 
      <Tarjeta nombre={'Juan'} profesion ={'Ingeniero'} descripcion={'39 años, trabaja en petróleo'} imagen={ing_img}/>
      <Tarjeta nombre={'Pedro'} profesion ={'Abogado'} descripcion={'37 años, tiene su estudio jurídico'} imagen={abogado_img}/>
      <Tarjeta nombre={'José'} profesion ={'Médico'} descripcion={'50 años, director del hospital'} imagen={medico_img}/>
    </div>
  )
}



