import './App.css';
import { MouseEvent, FormEvent, useState, ChangeEvent } from 'react'
// import { Card } from './components/Card.tsx'
// import { UserName } from './components/UserName.tsx'

// const handleSubmit = (e : FormEvent) => {
//   e.preventDefault()
//   alert('Formulario Enviado!')
// }



function App() {

  let [entrada, setEntrada] = useState('')

  const mudaEntrada = (e: ChangeEvent<HTMLInputElement>) => {
    setEntrada(e.target.value);

  }

  // if (entrada != ''){
  //   return(
  //     <div>
  //       Você já escreveu!
  //     </div>
  //   )

  // }


  return (
    <div>

      {/* {loged && <div>Usuário Logado!</div>}
      <button onClick={logarUsuario}>
      {loged ? 'Deslogar!' : 'Logado'}
      </button> */}
      {entrada == '' ?
        <div>
          <>
            <input

              value={entrada}
              onChange={mudaEntrada}
            />
            <h2>{entrada}</h2>
          </>
        </div>
        :

        'Você já escreveu!'
      }


    </div>

  )
}

export default App;
