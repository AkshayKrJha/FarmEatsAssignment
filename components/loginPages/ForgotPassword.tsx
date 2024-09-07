import { forgotPassword } from "@/API/api-functions";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { BackToLogin } from "../BackToLogin";
import { router } from "expo-router";

export function ForgotPassword() {
  const [phone, setPhone] = useState<any>("");
  async function passwordForgot(number: any) {
    const response = await forgotPassword(number);
    console.log("Forgot Password Response", response);
    alert(response?.message);
    // if (response?.success)
    router.navigate({ pathname: "/verify-otp" });
  }
  return (
    <View style={styles.root}>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <BackToLogin />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        onChangeText={(text) => setPhone(text)}
        value={phone}
        keyboardType="phone-pad"
        left={<TextInput.Icon icon="phone-outline" />}
      />
      <Pressable
        style={styles.button}
        onPress={async () => {
          await passwordForgot(phone);
        }}
      >
        <Text style={styles.buttonText}>Send Code</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, padding: "2%", justifyContent: "center" },
  forgot: { fontWeight: "bold", paddingVertical: "2%", fontSize: 30 },
  input: { marginVertical: "1%", justifyContent: "center" },
  button: {
    paddingVertical: "2%",
    marginVertical: "2%",
    backgroundColor: Colors.app.pressable,
    borderRadius: 80,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
