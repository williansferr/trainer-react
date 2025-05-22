import { useEffect } from "react";

export const UseEffectExercicio06 = () => {
    useEffect(() =>{
        console.log('Card Renderizado!')
        return () => console.log('Card Sumiu!')
    },[])

    return(
        <div>
                Card Renderizado
                
        </div>
    )

}