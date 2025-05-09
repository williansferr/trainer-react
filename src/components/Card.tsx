import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export const Card = ({children} : Props) => {

    return(
        <div style={{border: '1px solid red', borderRadius: '20px'}}>
            {children}
        </div>
    )
}