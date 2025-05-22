import React, { useState } from "react"
import { ContainerCenter } from "./ContainerCenter.tsx";


//Exercicio de treinamento
function Exercicio05 () {

    const [tarefas, setTarefa] = useState<{label: string, done: boolean}[]> ([])
    const [entrada, setEntrada] = useState('')

    const mudaEstadoTarefa = () => {
        if (entrada == '') return;

        setTarefa([...tarefas, {label: entrada, done:false}])

        setEntrada('')

    }

    const deletaTarefa = (index: number) => {

        setTarefa(tarefas.filter((_value, key) =>  key != index ))
    }

    const alterarTarefa = (key: number) =>{
        const newTarefas = [...tarefas]
        newTarefas[key].done =  !newTarefas[key].done
        setTarefa(newTarefas)
    }


    return(
        <ContainerCenter>
            <h2>Tarefas:</h2>
            <br/>
            <input
            value={entrada}
            onChange={e => setEntrada(e.target.value)}
            />
            <button
                onClick={mudaEstadoTarefa}
            >
             Adicionar
            </button>
          
            <div>
                <ul>
                    {
                        tarefas.map((valor, chave) =>(
                          <li key={chave}>
                            <input 
                            type="checkbox"
                            checked={valor.done}
                            onChange={() => alterarTarefa(chave)}
                            />
                            {valor.label}
                            
                            <button onClick={() => deletaTarefa(chave)}>Excluir</button>
                            
                          </li>
                        ))
                    }
                </ul>
            </div>


        </ContainerCenter>
    )
}
export default Exercicio05