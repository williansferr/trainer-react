

type Props = {
    clicar: (Label: string) => void
}

export const Button = ({clicar}: Props) => {
    const label = "Meu texto do botão"
    return (

        <button 
            // onClick={clicar(label)}  
            >
            {label}
        </button>
    )
}