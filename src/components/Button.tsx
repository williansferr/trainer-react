type Props = {
    label: string;
    onClick: () => void
}

// const clicaAlert = (v) => {
//     alert("Clicou!!!")
//   }

export const Button = ({ label, onClick }: Props) => {
    {/* <button onClick={ () => clicaAlert(props)}  >Botão com Função</button> */}
    return (

        <>
            <button label={label} onClick={onclick} >Click</button>
        </>
    )
}