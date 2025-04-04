import { createContext, useState } from "react";

export const settingsContext = createContext({
    isDarkMode: false,
    toggleIsDarkMode: () => { },
    fullscreen: false,
    toggleFullscreen: () => { },
    quotesToFetch: 50,
    setQuotesToFetch: (value: number) => { }
});

export function SettingsContextProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [quotesToFetch, setQuotesToFetch] = useState(50);

    function toggleIsDarkMode() {
        setIsDarkMode((prev) => !prev);
    }

    function toggleFullscreen() {
        setFullscreen((prev) => !prev);
    }

    return (
        <settingsContext.Provider
            value={{
                isDarkMode,
                toggleIsDarkMode,
                fullscreen,
                toggleFullscreen,
                quotesToFetch,
                setQuotesToFetch
            }}
        >
            {children}
        </settingsContext.Provider>
    );
}
