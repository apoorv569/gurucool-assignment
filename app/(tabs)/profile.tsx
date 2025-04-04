import { settingsContext } from "@/context/SettingsContext";
import { userContext } from "@/context/UserContext";
import { useContext, useState } from "react";
import { Button, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Profile() {
    const { isDarkMode } = useContext(settingsContext);
    const { username, setUsername, bio, setBio } = useContext(userContext);
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    // Basic form validation
    function validateForm() {
        let errors = {};

        if (!username.trim()) errors.username = "Username is required";
        if (!password.trim()) errors.password = "Password is required";
        if (!bio.trim()) errors.bio = "Bio cannot be empty";

        setErrors(errors)

        return Object.keys(errors).length === 0;
    }

    function submitForm() {
        if (validateForm()) {
            // NOTE: as an example we just log the values submitted to the console
            // in a real application we would POST this to a API
            // ATM because of UserContext changing the value of TextInput field
            // will change the values temporarily
            console.log("Submitted", username, password, bio);

            setUsername("");
            setPassword("");
            setBio("");
            setErrors({});
        }
    }

    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={100}
            style={[styles.container, { backgroundColor: isDarkMode ? "#5A2D6D" : "#F8F0FF" }]}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
                <View style={[styles.form, { backgroundColor: isDarkMode ? "#452C5A" : "#F0E0FF" }]}>
                    <Image
                        source={require("@/assets/images/favicon.png")}
                        style={styles.image}
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
                        value={username}
                        onChangeText={setUsername}
                    />
                    {
                        errors.username ?
                            <Text
                                style={[
                                    styles.errorText,
                                    {
                                        color: isDarkMode ? "#E0A0C0" : "#B00050",
                                    }
                                ]}
                            >
                                {errors.username}
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
                        value={bio}
                        onChangeText={setBio}
                    />
                    {
                        errors.bio ?
                            <Text
                                style={[
                                    styles.errorText,
                                    {
                                        color: isDarkMode ? "#E0A0C0" : "#B00050",
                                    }
                                ]}
                            >
                                {errors.bio}
                            </Text>
                            : null
                    }
                    <View style={{ height: 20 }} />
                    <Button
                        title="Update"
                        color={isDarkMode ? "#8F5C9A" : "plum"}
                        onPress={() => submitForm()}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignSelf: "center",
        marginBottom: 50,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderRadius: 5,
    },
    errorText: {
        marginBottom: 8,
    },
})
