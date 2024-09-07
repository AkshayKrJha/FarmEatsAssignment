import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { login } from "../../API/api-functions";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { router } from "expo-router";
import { LoginButtons } from "../LogInButtons";

export function Login() {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  async function loginWithAPI(email: any, password: any) {
    //login with credentials
    const response = await login(email, password);
    console.log("Email Login Response", response);
    alert(response?.message);
    if (response?.success) {
      // Navigate to some page on successful login
      router.navigate("/confirmation");
    }
  }
  return (
    <View style={styles.root}>
      <Text style={styles.welcome}>Welcome Back!</Text>
      <Text style={styles.new}>
        New here?{" "}
        <Text
          style={styles.create}
          onPress={() => {
            // navigate to signup page
            router.navigate({ pathname: "/signup" });
          }}
        >
          Create account
        </Text>
      </Text>
      <TextInput
        style={styles.input}
        label={"Email Address"}
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        left={<TextInput.Icon icon={"at"} />}
      />
      <View style={styles.inputView}>
        <TextInput
          style={{ ...styles.input, flex: 5, marginVertical: "0%" }}
          placeholder={"Password"}
          autoCapitalize="none"
          onChangeText={(text: any) => setPassword(text)}
          value={password}
          secureTextEntry
          left={<TextInput.Icon icon={"lock-outline"} />}
        />
        <Text
          style={{ ...styles.create, flex: 1, textAlign: "center" }}
          onPress={() => {
            // navigate to forgot password page
            router.navigate({ pathname: "/forgot-password" });
          }}
        >
          Forgot?
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={async () => {
          await loginWithAPI(email, password);
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.option}>or login with</Text>
      <LoginButtons />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: "2%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  welcome: { fontSize: 30, fontWeight: "bold", paddingVertical: "2%" },
  new: {
    color: "#888",
    fontSize: 15,
    fontWeight: "light",
    paddingVertical: "2%",
  },
  create: { color: Colors.app.pressable, fontSize: 15, fontWeight: "normal" },
  input: { marginVertical: "2%", borderRadius: 15 },
  inputView: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000019",
  },
  button: {
    justifyContent: "center",
    backgroundColor: Colors.app.pressable,
    padding: "2%",
    marginVertical: "2%",
    borderRadius: 50,
  },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 18 },
  option: {
    textAlign: "center",
    padding: "1%",
    fontSize: 16,
    fontWeight: "light",
    color: "#aaa",
  },
});
