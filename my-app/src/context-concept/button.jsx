import React, { useContext } from 'react'
import GlobalState, { GlobalContext } from '../context'

const Button = () => {
    const {setTheme,Theme} = useContext(GlobalContext)
  return (
    <div>
        <button onClick={() => setTheme(Theme === "light" ? "dark" : "light")}>
        Change theme
    </button>
    </div>
  )
}

export default Button
