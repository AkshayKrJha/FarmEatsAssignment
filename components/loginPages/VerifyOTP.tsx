import { verifyOTP } from "@/API/api-functions";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { BackToLogin } from "../BackToLogin";
import { router } from "expo-router";

export function VerifyOTP() {
  const [otp, setOTP] = useState<any>(["", "", "", "", "", ""]);
  async function OTPVerify(otp: any) {
    const response = await verifyOTP(otp);
    console.log("Response from Verify OTP", response);
    alert(response?.message)
    // if (response?.success) 
      router.navigate({ pathname: "/reset-password",params:{token:response?.token} });
  }
  return (
    <View style={styles.root}>
      <Text style={styles.verify}>Verify OTP</Text>
      <BackToLogin />
      <View style={styles.inputContainer}>
        {otp?.map((v: any, i: any) => {
          return (
            <TextInput
              key={i}
              style={styles.input}
              value={otp[i]}
              onChangeText={(text) => {
                setOTP((otp: any) => {
                  let OTP = [...otp];
                  OTP[i] = text;
                  return OTP;
                });
              }}
              maxLength={1}
              keyboardType="number-pad"
            />
          );
        })}
      </View>
      <Pressable
        style={styles.button}
        onPress={async () => {
          await OTPVerify(otp?.join(""));
          // on success, go to reset-password page
          // router.navigate({ pathname: "/reset-password" });
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      <Text
        style={styles.bottomText}
        onPress={async () => {
          router.back();
        }}
      >
        Resend Code
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, padding: "2%", justifyContent: "center" },
  verify: { fontWeight: "bold", padding: "2%", fontSize: 30 },
  input: {
    margin: "1%",
    justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  bottomText: {
    textDecorationLine: "underline",
    color: "#000b",
    textAlign: "center",
  },
});
