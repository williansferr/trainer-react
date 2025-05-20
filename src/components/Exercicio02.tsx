import { MouseEvent, FormEvent, useState, ChangeEvent } from 'react'

 function Exercicio02 (){
    const [name, setName] = useState({firstName:'', lastName:'' })

    const atribuiFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setName({...name, firstName: e.target.value})
    }

    const atribuiLastName = (e: ChangeEvent<HTMLInputElement>) =>{
        setName({...name, lastName: e.target.value})
    }


    return(
        <div>
            <input
            
            onChange={atribuiFirstName}
            value={name.firstName}
            />

            <input
            onChange={atribuiLastName}
            value={name.lastName}
            />
        </div>

    )

}

export default Exercicio02;