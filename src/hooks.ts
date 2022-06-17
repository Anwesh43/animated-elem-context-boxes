import { CSSProperties, useEffect, useState } from "react"

const scGap : number = 0.02 
const delay : number = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setScale(0)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

const sinify = (scale : number) : number => Math.sin(scale * Math.PI)

export const useStyle = (w : number, h : number, scale : number) => {
    const position = "absolute"
    const size = Math.min(w, h) / 10
    const sf : number = sinify(scale)
    return {
        blockStyle() : CSSProperties {
            const top = `${h / 2 - size / 2}px`
            const left = `${(w / 2 - size / 2) * sf}px`
            const width = `${size}px`
            const height = `${size}px`
            const backColor : string = "indigo"
            return {
                position, 
                top, 
                left, 
                width, 
                height, 
                background: backColor 
            }
        },
        circleStyle() : CSSProperties {
            const top = `${(h / 2 - size * 1.5) * sf}px`
            const left = `${(w / 2 - size / 2)}px`
            const width = `${size}px`
            const height = `${size}px`
            const backColor : string = "indigo"
            const borderRadius = "50%"
            return {
                position, 
                top, 
                left, 
                width, 
                height, 
                background: backColor,
                borderRadius 
            }
        },
        lineStyle() : CSSProperties {
            const top = `${h / 2}px`
            const left = `${0.75 * w}px`
            const width = `${size}px`
            const height = `${size / 10}px`
            const transform = `rotate(${90 * sf}deg)`
            return {
                position, 
                top, 
                left,
                width, 
                height, 
                transform 
            }
        }
    }
}