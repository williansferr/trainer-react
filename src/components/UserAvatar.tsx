type Props = {
    src: String
}


export const UserAvatar = ({src}: Props) => {

    return(
        <img src={src} style={{with: 300, height: 210, padding: 1}}/>
    )
}

