

type Props = {
    name: String
}
export const UserName = ({name} :  Props) => {
    // UserName => props => 'Willians'

    return(
        <>
           {name}
        </>
    )
    
}