/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css"

export default ({element, className}) => {
    return(
        <section 
            className={className}
            style={{paddingBlock: '4rem 2rem'}}>
                
            {element}
        </section>
    )
}