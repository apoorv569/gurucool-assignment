import Card from "@/components/Card";
import { settingsContext } from "@/context/SettingsContext";
import { userContext } from "@/context/UserContext";
import { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Home() {
    const { isDarkMode, quotesToFetch } = useContext(settingsContext);
    const { username } = useContext(userContext);

    const [items, setItems] = useState([]);

    // Fetch quotes from dummyjson.com as dummy data to work with
    useEffect(() => {
        fetch(`https://dummyjson.com/quotes?limit=${quotesToFetch}`)
            .then((res) => res.json())
            .then((data) => setItems(data.quotes))
            .catch((err) => console.error("Error fetching from endpoint: ", err));
    }, [quotesToFetch])

    return (
        <SafeAreaView style={[styles.safeContainer, { backgroundColor: isDarkMode ? "#5A2D6D" : "#F8F0FF" }]}>
            <View style={[styles.container, { backgroundColor: isDarkMode ? "#5A2D6D" : "#F8F0FF" }]}>
                <Text style={[styles.text, { color: isDarkMode ? "#D8BFD8" : "#4B0082" }]}>
                    Welcome {username}, here are some cool quotes.
                </Text>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item }) =>
                            <Card key={item.id} content={item.quote} subtitle={item.author} />
                    }
                    contentContainerStyle={{ paddingBottom: 16 }}
                    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                />
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: "center",
        marginVertical: 16,
    },
})
