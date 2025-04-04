import { settingsContext } from "@/context/SettingsContext";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useContext } from "react";

export default function App() {
    const { isDarkMode, showStatusBar } = useContext(settingsContext);

    return (
        <Tabs
            screenOptions={{
                headerTitle: "Cool quotes app",
                headerStyle: { backgroundColor: isDarkMode ? "#5A3E72" : "plum" },
                headerTintColor: isDarkMode ? "#EAE0F0" : "#333",
                headerTitleAlign: "center",
                headerShown: showStatusBar,
                tabBarStyle: { backgroundColor: isDarkMode ? "#5A3E72" : "plum" },
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: isDarkMode ? "#E6C2F0" : "#4B0082",
                tabBarInactiveTintColor: isDarkMode ? "#A378B6" : "#86608E",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={24} color={color} />
                }}
            />
        </Tabs >
    );
}
