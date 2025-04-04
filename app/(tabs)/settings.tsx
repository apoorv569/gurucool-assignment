import { settingsContext } from "@/context/SettingsContext";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from "react-native";

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
        <SafeAreaView style={[styles.safeContainer, { backgroundColor: isDarkMode ? "#5A2D6D" : "#F8F0FF" }]}>
            <View style={[styles.container, { backgroundColor: isDarkMode ? "#5A2D6D" : "#F8F0FF" }]}>
                <View style={[styles.option, { backgroundColor: isDarkMode ? "#7A4988" : "#EAD7F5" }]}>
                    <View style={styles.optionLabelContainer}>
                        <MaterialIcons name={isDarkMode ? "wb-sunny" : "nights-stay"} size={18} style={styles.optionIcon} />
                        <Text style={[styles.optionLabelText, { color: isDarkMode ? "#D8BFD8" : "#4B0082" }]}>
                            Dark mode
                        </Text>
                    </View>
                    <Switch
                        value={isDarkMode}
                        onValueChange={toggleIsDarkMode}
                        trackColor={{ false: "#D8BFD8", true: "#A378B6" }}
                        thumbColor={isDarkMode ? "#E6C2F0" : "#8F5C9A"}
                    />
                </View>
                <View style={[styles.option, { backgroundColor: isDarkMode ? "#7A4988" : "#EAD7F5" }]}>
                    <View style={styles.optionLabelContainer}>
                        <MaterialIcons name={fullscreen ? "fullscreen" : "fullscreen-exit"} size={18} style={styles.optionIcon} />
                        <Text style={[styles.optionLabelText, { color: isDarkMode ? "#D8BFD8" : "#4B0082" }]}>
                            Fullscreen
                        </Text>
                    </View>
                    <Switch
                        value={fullscreen}
                        onValueChange={toggleFullscreen}
                        trackColor={{ false: "#D8BFD8", true: "#A378B6" }}
                        thumbColor={isDarkMode ? "#E6C2F0" : "#8F5C9A"}
                    />
                </View>
                <View style={[styles.option, { backgroundColor: isDarkMode ? "#7A4988" : "#EAD7F5" }]}>
                    <View style={styles.optionLabelContainer}>
                        <MaterialIcons name="format-quote" size={18} style={styles.optionIcon} />
                        <Text style={[styles.optionLabelText, { color: isDarkMode ? "#D8BFD8" : "#4B0082" }]}>
                            Quote to fetch
                        </Text>
                    </View>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    optionLabelContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    optionIcon: {
        marginRight: 16
    },
    optionLabelText: {
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
