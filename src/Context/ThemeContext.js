import React, { createContext, useState } from "react";

// création du contexte
export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }

    if (theme){
        document.body.classList.add('dark-body')
    } else {
        document.body.classList.remove('dark-body')
    }

    return (
        //c'est le context englobant, provider c'est lui qui va apporter les donnees
        //qu'on veut passer au sous composants, value est la donnée partagée
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
        //props children va afficher ts les enfants qui vont etre englobés

    )
}

export default ThemeContextProvider;