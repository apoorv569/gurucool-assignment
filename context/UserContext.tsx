import { createContext, useState } from "react";

export const userContext = createContext({
    username: "",
    setUsername: (value: string) => { },
    bio: "",
    setBio: (value: string) => { },
})

export function UserContextProvider({ children }) {
    const [username, setUsername] = useState("Guest");
    const [bio, setBio] = useState("Guest user");

    return (
        <userContext.Provider
            value={{
                username,
                setUsername,
                bio,
                setBio,
            }}
        >
            {children}
        </userContext.Provider>
    )
}
