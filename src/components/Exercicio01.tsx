import { MouseEvent, FormEvent, useState, ChangeEvent } from 'react'
// import { Card } from './components/Card.tsx'
// import { UserName } from './components/UserName.tsx'

// const handleSubmit = (e : FormEvent) => {
//   e.preventDefault()
//   alert('Formulario Enviado!')
// }



function Exercicio01() {

    let [input, setInput] = useState(0)

    //fila de contador
    const incrementaValor = () => {
        setInput(c => c + 3)
    }


    return (
        <div>
            <h2>
                {input}
            </h2>
            <button
            onClick={incrementaValor}>
                Adicionar
            </button>
        </div>


    )
}

export default Exercicio01;
