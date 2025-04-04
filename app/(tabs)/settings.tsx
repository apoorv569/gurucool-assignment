import { settingsContext } from "@/context/SettingsContext";
import { useContext } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function Settings() {
    const {
        isDarkMode,
        toggleIsDarkMode,
        fullscreen,
        toggleFullscreen,
        quotesToFetch,
        setQuotesToFetch
    } = useContext(settingsContext);

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? "#5A2D6D" : "#F8F0FF" }]}>
            <View style={styles.option}>
                <Text style={[styles.text, { color: isDarkMode ? "#D8BFD8" : "#4B0082" }]}>
                    Dark mode
                </Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleIsDarkMode}
                    trackColor={{ false: "#D8BFD8", true: "#A378B6" }}
                    thumbColor={isDarkMode ? "#E6C2F0" : "#8F5C9A"}
                />
            </View>
            <View style={styles.option}>
                <Text style={[styles.text, { color: isDarkMode ? "#D8BFD8" : "#4B0082" }]}>
                    Fullscreen
                </Text>
                <Switch
                    value={fullscreen}
                    onValueChange={toggleFullscreen}
                    trackColor={{ false: "#D8BFD8", true: "#A378B6" }}
                    thumbColor={isDarkMode ? "#E6C2F0" : "#8F5C9A"}
                />
            </View>
            <View style={styles.option}>
                <Text style={[styles.text, { color: isDarkMode ? "#D8BFD8" : "#4B0082" }]}>
                    Quote to fetch
                </Text>
                <TextInput
                    style={[
                        styles.input,
                        {
                            color: isDarkMode ? "#D8BFD8" : "#4b0082",
                            borderColor: isDarkMode ? "#D8BFD8" : "#4b0082",
                            backgroundColor: isDarkMode ? "#5A3E72" : "#fcfcfc",
                        }
                    ]}
                    value={quotesToFetch.toString()}
                    keyboardType="numeric"
                    onChangeText={(text) => setQuotesToFetch(Number(text) || 50)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: "center",
    },
    input: {
        height: 40,
        width: 100,
        padding: 8,
        borderWidth: 1,
        borderRadius: 5,
    },
})
