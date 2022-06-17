import React, { useContext } from 'react'
import ObjectContext from './ObjectContext'
import {useStyle} from './hooks'

const Line = () => {
    const {w, h, scale} = useContext(ObjectContext)
    const {lineStyle} = useStyle(w, h, scale)
    return (
        <div style = {lineStyle()}>
        </div>
    )
}

export default Line 