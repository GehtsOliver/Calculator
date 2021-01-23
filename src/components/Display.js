import React from 'react'
import DisplaySVG from "../Assets/Display.svg"
import StateContext from '../HOC/StateContext'

const Display = () => {
    return (
        <StateContext.Consumer>
            {context => (
        <>
        <img className="Calc-Display" src={DisplaySVG} alt="The display"/>
        <div className="Display-Container">
        <p className="Display-Output" >{context.output}</p>
        <p className="Display-Input" id="display">{context.input}</p>
        </div>
        </>
        )}
        </StateContext.Consumer>
    )
}

export default Display
