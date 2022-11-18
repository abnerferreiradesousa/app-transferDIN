import { useState } from "react"

export interface PropsData {
    title: string,
    handleClick: (name: string, password: string) => void
}

export default function Form({title, handleClick}: PropsData) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form action="">
            <h1>{title}</h1>
            <label htmlFor="">
                Username
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label htmlFor="">
                Password
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </label>
            <button
                type="button"
                onClick={ () => handleClick(name, password) }>
                    {title}
            </button>
        </form>
    )
}