import React from "react";
import { BotãoContainer } from "./styled";


 const ContainerButton = (
type,
text,
onClick,
//disabled,

) => {
    return(
        <BotãoContainer
        type={type}
        text={ text}
        onClick={onClick}
    
        > 
       
        </BotãoContainer>
        
        
    );

}
export default ContainerButton 