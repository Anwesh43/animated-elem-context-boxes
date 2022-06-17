import React from "react";
import {useAnimatedScale, useDimension} from './hooks'
import ObjectContext from "./ObjectContext";

const withObjectContext = (MainComponent : React.FC<any>) => {
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const newProps = {
            w, 
            h, 
            onClick, 
            scale 
        }
        return <ObjectContext.Provider value = {newProps}>
            <MainComponent {...props}/>
        </ObjectContext.Provider>
    }
}

export default withObjectContext