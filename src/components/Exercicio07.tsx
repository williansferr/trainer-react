import { useState, useEffect } from "react";


export const Exercicio07 = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')

    useEffect(() => {
         setFullName(`${firstName} ${lastName}`)   
    }, [firstName, lastName])


    return (
        <div>
            <input
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <input
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />

            {/* <button onClick={e =>  } */}
            {/* >Enviar</button> */}

            <strong>Meu nome é {fullName}</strong>
        </div>
    )
}