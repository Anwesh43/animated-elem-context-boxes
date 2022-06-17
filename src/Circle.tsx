import React from "react";
import { useContext } from "react";
import { useStyle } from "./hooks";
import ObjectContext from "./ObjectContext";
const Circle : React.FC<any> = (props : any) => {
    const {w, h, scale, onClick} = useContext(ObjectContext)
    const {circleStyle} = useStyle(w, h, scale)
    return (
        <div style = {circleStyle()} onClick = {() => onClick()}>

        </div>
    )
}

export default Circle 
