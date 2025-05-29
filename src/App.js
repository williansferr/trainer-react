import './App.css';
import { MouseEvent, FormEvent, useState, ChangeEvent } from 'react'
import { UseEffectExercicio06 } from './components/UseEffectExercicio06.tsx'
import  {Exercicio07}  from './components/Exercicio07.tsx'
// import { Card } from './components/Card.tsx'
// import { UserName } from './components/UserName.tsx'

// const handleSubmit = (e : FormEvent) => {
//   e.preventDefault()
//   alert('Formulario Enviado!')
// }



function App() {

  let [entrada, setEntrada] = useState(false)

  const exibeRemoveComponenet = () => setEntrada(!entrada)





// const mudaEntrada = (e: ChangeEvent<HTMLInputElement>) => {
//   setEntrada(e.target.value);

// }

// if (entrada != ''){
//   return(
//     <div>
//       Você já escreveu!
//     </div>
//   )

// }


// return (
// <div>

{/* {loged && <div>Usuário Logado!</div>}
      <button onClick={logarUsuario}>
      {loged ? 'Deslogar!' : 'Logado'}
      </button> */}
{/* {entrada == '' ?
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
        } */}



{/* </div> */ }

// )
//}

return (
  <>
    <button onClick={exibeRemoveComponenet}>Elemento</button>

    {entrada &&
      <Exercicio07 />
    }
  </>
)
}

export default App;
