import React,{useState} from 'react'

export default function Informacion() {

const [ancho, setAncho] = useState(0)
const [alto, setAlto] = useState(0)
const [largo, setLargo] = useState(0)
const volumen = alto*ancho*largo
const [peso, setPeso] = useState(0)
const [tipo, setTipo] = useState("")
const [nombre, setNombre] = useState("")
const [identificacion, setIdentificacion] = useState("")
const [direccion, setDireccion] = useState("")
const [ciudad, setCiufdad] = useState("")
const [horario, setHorario] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();
  alert("datos de envio registrados");
};

  return (
    <>
    <form onSubmit={handleSubmit}>
    <h2>Informacion del paquete</h2>
    <h4>Ingrese las dimensiones:</h4>
    <label htmlFor="ancho">Ancho=</label>
    <input type="Int" name="ancho" id="ancho" value={ancho}/>
    <label htmlFor="alto">Alto=</label>
    <input type="Int" name="alto" id="alto" value={alto}/>
    <label htmlFor="ancho">Largo=</label>
    <input type="Int" name="Largo" id="Largo" value={largo}/>
    <br />
    <h4>Volumen = {volumen} metros cubicos</h4>
    <label htmlFor="peso">Peso</label>
    <input type="Int" name='peso' id='ancho' value={peso}/>
    <label htmlFor="kg">Kg</label>
    <br />
    <p>Tipo de Mercancia:</p>
    <input type="radio" id='Fragil' name='tipo' value="fragil" onChange={(e) => setTipo(e.target.value)}/>
    <label htmlFor="fragil">Fragil</label>
    <input type="radio" id='normal' name='tipo' value="normal" onChange={(e) => setTipo(e.target.value)}/>
    <label htmlFor="normal">Normal</label>
    <br />
    <h2>Datos de envio</h2>
    <p>Horario disponible</p>
    <input type="date" name='horario' id='horario' value={horario}/>
    <br /> <br />
    <label htmlFor="nombre">Nombre:</label>
    <input type="text" name="nombre" id="nombre" value={nombre}/>
    <label htmlFor="identificacion">Identificacion:</label>
    <input type="Int" name="identificacion" id="identificaion" value={identificacion}/>
    <br />
    <label htmlFor="direccion">Direccion:</label>
    <input type="text" name="direccion" id="direccion" value={direccion}/>
    <label htmlFor="ciudad">Ciudad:</label>
    <select name="ciudad" onChange={(e) => setBebida(e.target.value)}>
    <option value="----">----------------</option>
    <option value="bogota">Bogota</option>
    <option value="medellin">Medellin</option>
    <option value="cali">Cali</option>
    <option value="barranquilla">Barranquilla</option>
    </select>
    <br />
    <h2>Datos de recibido</h2>
    <label htmlFor="nombre">Nombre:</label>
    <input type="text" name="nombre" id="nombre" value={nombre}/>
    <label htmlFor="identificacion">Identificacion:</label>
    <input type="Int" name="identificacion" id="identificaion" value={identificacion}/>
    <br />
    <label htmlFor="direccion">Direccion:</label>
    <input type="text" name="direccion" id="direccion" value={direccion}/>
    <label htmlFor="ciudad">Ciudad:</label>
    <select name="ciudad" onChange={(e) => setBebida(e.target.value)}>
    <option value="----">----------------</option>
    <option value="bogota">Bogota</option>
    <option value="medellin">Medellin</option>
    <option value="cali">Cali</option>
    <option value="barranquilla">Barranquilla</option>
    </select>
    <br />
    <input type="submit" value="Continuar" />
    </form>
    </>
  )
}
