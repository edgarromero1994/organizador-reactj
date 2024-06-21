import "./Colaborador.css"

const Colaborador = (props) => {
  const {nombre, puesto, foto, equipo, id, fav} = props.datos
  const {colorPrimario, eliminarColaborador, like} = props
  return (
        <div className="colaborador">
          <i className="ri-close-circle-fill eliminar" onClick={() => eliminarColaborador(id)}></i>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
              
            {fav ? <i class="ri-heart-fill" onClick={() =>  like(id)}></i> : <i class="ri-heart-line" onClick={() =>  like(id)}></i>}
        </div>
        </div>
  )
}

export default Colaborador