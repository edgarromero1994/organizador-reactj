import React, { useState } from 'react'
import "./Formulario.css"
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'
import Campo from '../Campo/Campo'

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("")
  const [puesto, actualizarPuesto] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [equipo, actualizarEquipo] = useState("")

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("")

  const { registrarColaborador, crearEquipo} = props

  const manejarEnvio = (e) => {
      e.preventDefault()
      console.log("Manejar el envio")
      let datosAEnviar = {
          nombre,
          puesto,
          foto,
          equipo
      }
      registrarColaborador(datosAEnviar)
  }

  const manenarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }

  return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manenarNuevoEquipo}>
            <h2>Rellena el formulario para crear un equipo.</h2>
            <Campo
                titulo="titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar El color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type = "color"
            />

            <Boton>
                Registrar equipo
            </Boton>
             </form>
    </section>
}

export default Formulario