import React, { useContext } from 'react'
import { GlobalContext } from '../context'

const Text = () => {
    const { Theme } = useContext(GlobalContext)
    return (
        <div>
            <h1 style={{
                fontSize: Theme === "light" ? "50px" : "100px",
                backgroundColor: Theme === "light" ? "#ffffff" : "#000000",
                color: Theme === "light" ? "blue" : "yellow",
            }}>
                Yashwanth Kumar
            </h1>
        </div>
    )
}

export default Text
