import React from 'react'
import DisplaySVG from "../Assets/Display.svg"
import MyContext from '../HOC/MyContext'

const Display = () => {
    return (
        <MyContext.Consumer>
            {context => (
        <>
        <img className="Calc-Display" src={DisplaySVG} alt="The display"/>
        <p className="Display">{context.input}</p>
        </>
        )}
        </MyContext.Consumer>
    )
}

export default Display
