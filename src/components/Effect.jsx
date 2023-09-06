import { useState, useEffect } from "react";

export default function Effect() {
    const [username, setUserName] = useState(localStorage.getItem("username") ? localStorage.getItem("username") : "test");

    const handleUsername = (ev) => {
        setUserName(ev.target.value)

        localStorage.setItem("username", ev.target.value)
    }

    useEffect(() => {
        console.log("Rendered")
    }, [])

    useEffect(() => {
        if (username === "") return;
        console.log("Updated")
    }, [username])

    useEffect(() => {
        return () => {
            console.log("Unmount")
        }
    }, [])
    return (
        <div>
            <h1>{`Hello ${username}`}</h1>

            <input type="text" value={username} onChange={handleUsername} />
        </div>
    )
}