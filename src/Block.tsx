import React, { useContext } from "react";
import { useStyle } from "./hooks";
import ObjectContext from "./ObjectContext";

const Block : React.FC<any> = (props : any) => {
    const {w, h, scale} = useContext(ObjectContext)
    const {blockStyle} = useStyle(w, h, scale)
    return (
        <div style = {blockStyle()}>

        </div>
    )
} 

export default Block 