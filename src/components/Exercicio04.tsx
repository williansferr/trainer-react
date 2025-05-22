import React, { useState } from "react"
import { ContainerCenter } from "./ContainerCenter.tsx";


//Exercicio de treinamento
function Exercicio04 () {

    const [tarefa, setTarefa] = useState<string[]> ([])
    const [entrada, setEntrada] = useState('')

    const mudaEstadoTarefa = () => {
        if (entrada == '') return;

        setTarefa([...tarefa, entrada])

        setEntrada('')

    }

    const deletaTarefa = (index: number) => {

        setTarefa(tarefa.filter((_value, key) =>  key != index ))
    }

    // const alterarTarefa = (index, infoAlterada: string) =>{

    //     setTarefa()
    // }


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
            <br>
            </br>
            <div>
                <ul>
                    {
                        tarefa.map((valor, chave) =>(
                          <li key={chave}>
                            {valor}
                            -
                            <button onClick={() => deletaTarefa(chave)}>Excluir</button>
                            {/* <button onClick={() => alterarTarefa(chave)}>Alterar</button> */}
                          </li>
                        ))
                    }
                </ul>
            </div>


        </ContainerCenter>
    )
}
export default Exercicio04