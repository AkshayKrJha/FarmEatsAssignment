import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";

export function BackToLogin() {
  return (
    <Text style={styles.login}>
      Remember your password?{" "}
      <Text
        style={styles.log}
        onPress={() => {
          // navigate to login screen
          router.navigate({pathname:"/login"});
        }}
      >
        Login
      </Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  login: { color: "#888", fontSize: 15, paddingVertical: "2%" },
  log: { color: Colors.app.pressable, fontSize: 15 },
});
