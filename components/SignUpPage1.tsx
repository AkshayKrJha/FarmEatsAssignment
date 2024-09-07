import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { LoginButtons } from "./LogInButtons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function SignUpPage1() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View style={styles.root}>
      <Text style={styles.signUp}>
        Signup 1 of 4{"\n\n"}
        <Text style={styles.welcome}>Welcome!</Text>
      </Text>
      <LoginButtons />
      <Text style={styles.optionText}>or signup with</Text>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <TextInput
            style={styles.input}
            label={"Full Name"}
            value={fullName}
            autoCapitalize="none"
            onChangeText={(name) => setFullName(name)}
            left={<TextInput.Icon icon="account-outline" />}
            />
          <TextInput
            style={styles.input}
            label={"Email"}
            autoCapitalize="none"
            value={email}
            keyboardType="email-address"
            onChangeText={(mail) => setEmail(mail)}
            left={<TextInput.Icon icon="at" />}
            />
          <TextInput
            label={"Phone"}
            style={styles.input}
            value={phone}
            keyboardType="phone-pad"
            onChangeText={(phone) => setPhone(phone)}
            left={<TextInput.Icon icon="phone-outline" />}
            />
          <TextInput
            label={"Password"}
            style={styles.input}
            autoCapitalize="none"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            left={<TextInput.Icon icon="lock-outline" />}
            />
          <TextInput
            label={"Confirm Password"}
            style={styles.input}
            autoCapitalize="none"
            value={confirmPassword}
            error={confirmPassword !== "" && confirmPassword !== password}
            onChangeText={(confirmedPassword) =>
              setConfirmPassword(confirmedPassword)
            }
            secureTextEntry
            left={<TextInput.Icon icon="lock-outline" />}
          />
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <Text
          style={styles.login}
          onPress={() => {
            router.navigate("/login");
          }}
        >
          Login
        </Text>
        <Pressable
          style={styles.continueButton}
          onPress={() => {
            // navigate to page2
            router.navigate({
              pathname: "/farm-info",
              params: {
                page1Details: JSON.stringify({
                  fullName,
                  email,
                  phone,
                  password,
                  confirmPassword,
                }),
              },
            });
          }}
          disabled={password === "" || confirmPassword !== password}
        >
          <Text style={styles.continue} adjustsFontSizeToFit>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "5%",
  },
  signUp: {
    fontSize: 12,
    color: "#888",
    paddingVertical: "5%",
  },
  welcome: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
  },
  optionText: {
    textAlign: "center",
    fontSize: 14,
    color: "#888",
    alignContent: "center",
    paddingVertical: "2%",
  },
  scrollContainer: { flex: 7 },
  input: { marginVertical: "3%" },
  bottom: {
    flex: 2,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  login: { flex: 1, textDecorationLine: "underline" },
  continueButton: {
    flex: 2,
    padding: "2%",
    backgroundColor: Colors.app.pressable,
    borderRadius: 50,
  },
  continue: { color: "#fff", textAlign: "center", fontSize: 15 },
});
