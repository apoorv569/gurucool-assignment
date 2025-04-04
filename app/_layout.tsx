import { settingsContext, SettingsContextProvider } from "@/context/SettingsContext";
import { UserContextProvider } from "@/context/UserContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";

export default function RootLayout() {
    return (
        <UserContextProvider>
            <SettingsContextProvider>
                <InnerLayout />
            </SettingsContextProvider>
        </UserContextProvider>
    );
}

function InnerLayout() {
    const { isDarkMode, fullscreen } = useContext(settingsContext);

    return (
        <>
            <StatusBar style={isDarkMode ? "light" : "dark"} hidden={fullscreen} />
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
