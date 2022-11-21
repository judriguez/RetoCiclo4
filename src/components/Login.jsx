import React,{useState} from 'react'

export default function Login() {

    const[userName, setUserName] = useState("")
    const[contra, setContra] = useState("")
    const [terminos, setTerminos] = useState(false)

  return (
    <>
    <h2>Bienvenido a InstaYa</h2>
    <form >
        <label htmlFor="userName">Nombre de usuario:</label>
        <br />
        <input type="text" id='userName' name='userName' value={userName} />
        <br />
        <label htmlFor="contrasenia">Contraseña:</label>
        <br />
        <input type="password" id='contrasenia' name='contrasenia' value={contra} />
        <br /> <br />
        <input type="CheckBox" id='terminos' name='terminos'/>
        <label htmlFor="terminos">Aceptar Terminos y Condiciones</label>
        <br /> <br />
        <input type="submit" value="Acceder" />
    </form>
    </>
  )
}
