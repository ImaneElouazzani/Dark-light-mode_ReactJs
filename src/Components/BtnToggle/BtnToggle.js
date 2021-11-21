import React, {useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import './BtnToggle.css'

export default function BtnToggle() {

    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
       <button
        onClick={toggleTheme}
        className="btn-toggle">
           {theme ? "🌞🌥️🌈" : "🌛🌚⭐"}
       </button>
    )
}
