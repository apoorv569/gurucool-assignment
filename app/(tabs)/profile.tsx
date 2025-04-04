import { settingsContext } from "@/context/SettingsContext";
import { userContext } from "@/context/UserContext";
import { useContext, useState } from "react";
import { Image, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Profile() {
    const { isDarkMode } = useContext(settingsContext);
    const { username, setUsername, bio, setBio } = useContext(userContext);

    const [localUsername, setLocalUsername] = useState("");
    const [localBio, setLocalBio] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    // Basic form validation
    function validateForm() {
        let errors = {};

        if (!localUsername.trim()) errors.localUsername = "Username is required";
        if (!password.trim()) errors.password = "Password is required";
        if (!localBio.trim()) errors.localBio = "Bio cannot be empty";

        setErrors(errors)

        return Object.keys(errors).length === 0;
    }

    function submitForm() {
        if (validateForm()) {
            // as an example we just log the values submitted to the console
            // in a real application we would POST this to a API
            console.log("Submitted", username, password, bio);

            // to simulate data being updated when update button is clicked
            // we store TextInput value in local state vars
            // and finally setting the UserContext with those values
            setUsername(localUsername);
            setBio(localBio);

            setPassword("");

            setLocalUsername("");
            setLocalBio("");

            setErrors({});
        }
    }

    return (
        <SafeAreaView style={[styles.safeContainer, { backgroundColor: isDarkMode ? "#5A2D6D" : "#F8F0FF" }]}>
            <KeyboardAvoidingView
                behavior='padding'
                keyboardVerticalOffset={100}
                style={[styles.container, { backgroundColor: isDarkMode ? "#5A2D6D" : "#F8F0FF" }]}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[styles.form, { backgroundColor: isDarkMode ? "#452C5A" : "#F0E0FF" }]}>
                        <Image
                            source={require("@/assets/images/favicon.png")}
                            style={[styles.image, { backgroundColor: isDarkMode ? "#5A3E72" : "#D8BFD8" }]}
                        />
                        <Text style={[styles.label, { color: isDarkMode ? "#E6C2F0" : "#4B0082" }]}>
                            Username
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                {
                                    color: isDarkMode ? "#D8BFD8" : "#4B0082",
                                    borderColor: isDarkMode ? "#D8BFD8" : "#4B0082",
                                    backgroundColor: isDarkMode ? "#5A3E72" : "#FCFCFC",
                                }
                            ]}
                            placeholder='Username'
                            value={localUsername}
                            onChangeText={setLocalUsername}
                        />
                        {
                            errors.localUsername ?
                                <Text
                                    style={[
                                        styles.errorText,
                                        {
                                            color: isDarkMode ? "#E0A0C0" : "#B00050",
                                        }
                                    ]}
                                >
                                    {errors.localUsername}
                                </Text>
                                : null
                        }
                        <Text style={[styles.label, { color: isDarkMode ? "#E6C2F0" : "#4B0082" }]}>
                            Password
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                {
                                    color: isDarkMode ? "#D8BFD8" : "#4B0082",
                                    borderColor: isDarkMode ? "#D8BFD8" : "#4B0082",
                                    backgroundColor: isDarkMode ? "#5A3E72" : "#FCFCFC",
                                }
                            ]}
                            placeholder='Password'
                            value={password}
                            onChangeText={setPassword}
                        />
                        {
                            errors.password ?
                                <Text
                                    style={[
                                        styles.errorText,
                                        {
                                            color: isDarkMode ? "#E0A0C0" : "#B00050",
                                        }
                                    ]}
                                >
                                    {errors.password}
                                </Text>
                                : null
                        }
                        <Text style={[styles.label, { color: isDarkMode ? "#E6C2F0" : "#4B0082" }]}>
                            Bio
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                {
                                    color: isDarkMode ? "#D8BFD8" : "#4B0082",
                                    borderColor: isDarkMode ? "#D8BFD8" : "#4B0082",
                                    backgroundColor: isDarkMode ? "#5A3E72" : "#FCFCFC",
                                }
                            ]}
                            placeholder='Bio'
                            value={localBio}
                            onChangeText={setLocalBio}
                        />
                        {
                            errors.localBio ?
                                <Text
                                    style={[
                                        styles.errorText,
                                        {
                                            color: isDarkMode ? "#E0A0C0" : "#B00050",
                                        }
                                    ]}
                                >
                                    {errors.localBio}
                                </Text>
                                : null
                        }
                        <View style={{ height: 20 }} />
                        <Pressable
                            style={[styles.button, { backgroundColor: isDarkMode ? "#8F5C9A" : "plum" }]}
                            onPress={submitForm}
                        >
                            <Text style={[styles.buttonText, { color: isDarkMode ? "#E6C2F0" : "#4B0082" }]}>
                                Update
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
    form: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 9999,
        alignSelf: "center",
        marginBottom: 40,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        marginBottom: 16,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    button: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 600
    },
    errorText: {
        marginBottom: 8,
    },
})
