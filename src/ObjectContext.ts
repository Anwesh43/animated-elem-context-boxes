import { createContext } from "react";

const ObjectContext = createContext(
    {
        w: 0,
        h : 0, 
        scale : 0, 
        onClick() {
        }
    }
)

export default ObjectContext 