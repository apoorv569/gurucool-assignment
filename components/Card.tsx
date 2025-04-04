import { settingsContext } from "@/context/SettingsContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ content, subtitle }) {
    const { isDarkMode } = useContext(settingsContext);

    return (
        <View style={[styles.cardContainer, { backgroundColor: isDarkMode ? "#7A4988" : "#EAD7F5" }]}>
            <Text style={[styles.cardContent, { color: isDarkMode ? "#E6C2F0" : "#4B0082" }]}>
                {content}
            </Text>
            <Text style={[styles.cardSubtitle, { color: isDarkMode ? "#D8BFD8" : "#6A2976" }]}>
                {subtitle}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
    cardContent: {
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 10,
    },
    cardSubtitle: {
        fontSize: 12,
        fontWeight: 400
    },
});
