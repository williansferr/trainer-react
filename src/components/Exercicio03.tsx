import { useState } from "react"

// Arrays no State
function Exercicio03() {

    const [task, setTask] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('')

    const atribuiTasks = () => {
        if (inputValue == '') return; // verifica se o campo está vazio se estiver não faz nada

        // Metodo 1
        // setTask([...task, inputValue]) // seta task com valor passado
        
        // Metodo 2
        
        // setTask(task.concat(inputValue)) 

        const newTasks = [...task]
        newTasks.push(inputValue.toUpperCase())
        setTask(newTasks)
        setInputValue('') //limpa o campo
    }



    return (
        <div>
            <h2>Minha Lista de Tarefas</h2>
            <div>
                <input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}

                />
                <br/>
                <br/>
                <br/>
                <button onClick={atribuiTasks}>
                    Adicionar
                </button>
            </div>
            <div>
                <ul>
                    {task.map((value, key) => (
                        <li key={key}>
                            {value}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}
export default Exercicio03;