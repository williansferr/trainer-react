type Props = {
    email: String
}
export const UserEmail = ( {email} : Props) => {

    
    return(
            <h4>{ email.trim() }</h4>
    )
}
