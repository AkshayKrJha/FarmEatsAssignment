import { resetPassword } from "@/API/api-functions";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { BackToLogin } from "../BackToLogin";
import { router, useLocalSearchParams } from "expo-router";

export function ResetPassword() {
  const [newPassword, setNewPassword] = useState<any>("");
  const [confirmPassword, setConfirmPassword] = useState<any>("");
  const { token }: any = useLocalSearchParams();
  async function passwordReset(
    newPassword: any,
    confirmPassword: any,
    token: any
  ) {
    const response = await resetPassword(newPassword, confirmPassword, token);
    console.log("Response from reset password", response);
    // if success go to login page
    alert(response?.message);
    if (response?.success) router.navigate({ pathname: "/login" });
  }
  return (
    <View style={styles.root}>
      <Text style={styles.reset}>Reset Password</Text>
      <BackToLogin />
      <TextInput
        style={styles.input}
        left={<TextInput.Icon icon={"lock-outline"} />}
        autoCapitalize="none"
        placeholder="New Password"
        value={newPassword}
        onChangeText={(text) => {
          setNewPassword(text);
        }}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        left={<TextInput.Icon icon={"lock-outline"} />}
        autoCapitalize="none"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
        }}
        secureTextEntry
      />
      <Pressable
        style={styles.button}
        onPress={async () => {
          await passwordReset(newPassword, confirmPassword, token);
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, padding: "2%", justifyContent: "center" },
  reset: { fontWeight: "bold", paddingVertical: "2%", fontSize: 30 },
  input: { marginVertical: "1%", justifyContent: "center" },
  button: {
    paddingVertical: "3%",
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
