import './Tarjeta.css'


function Tarjeta (propiedades){
        
    return (<div className='tarjeta'> 
       <h2>{propiedades.nombre}</h2>
       <h3>{propiedades.profesion}</h3>
       <p>{propiedades.descripcion}</p>
       <img src={propiedades.imagen} alt="Foto de perfil"/> 
     </div>)
   }

export default Tarjeta