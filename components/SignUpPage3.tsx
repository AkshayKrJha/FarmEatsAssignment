import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { IconButton } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import { router, useLocalSearchParams } from "expo-router";

export default function SignUpPage3() {
  const [result, setResult] = useState<any>(null);
  const { page2Details }: any = useLocalSearchParams();
  const {
    businessName,
    informalName,
    state,
    streetAddress,
    city,
    zip,
    fullName,
    email,
    phone,
    password,
    confirmPassword,
  } = JSON.parse(page2Details);
  useEffect(() => {
    console.log("page2Details", page2Details);
  }, []);
  async function documentPickExpo() {
    try {
      const result: any = await DocumentPicker.getDocumentAsync({
        type: [
          "image/*",
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
        copyToCacheDirectory: false,
      });
      setResult(result?.assets[0]?.name);
    } catch (error) {
      console.warn("Error picking document", error);
    }
  }
  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);
  return (
    <View style={styles.root}>
      <View>
        <Text>
          <Text style={styles.signUp}>Signup 3 of 4</Text>
          {"\n\n"}
          <Text style={styles.verification}>Verification</Text>
          {"\n\n\n"}
          <Text style={styles.info}>
            Attached proof of Department of Agriculture registrations i.e.
            Florida Fresh, USDA Approved, USDA Organic
          </Text>
          {"\n\n"}
        </Text>
        <View style={styles.registrationView}>
          <Text style={styles.proof}>Attach proof of registration</Text>
          <IconButton
            icon="camera"
            onPress={documentPickExpo}
            iconColor="#fff"
            containerColor={Colors.app.pressable}
          />
        </View>
        {result && (
          <View style={styles.proofView}>
            <Text style={styles.reg}>{result}</Text>
            <IconButton
              icon="close"
              size={20}
              onPress={() => {
                setResult(null);
              }}
              mode="contained"
              iconColor="#000"
            />
          </View>
        )}
      </View>
      <View style={styles.bottom}>
        <IconButton
          icon={"arrow-left"}
          onPress={() => {
            router.back();
          }}
          style={styles.arrow}
        />
        <Pressable
          style={styles.continueButton}
          onPress={() => {
            // navigate to page3
            router.navigate({
              pathname: "/hours",
              params: {
                page3Details: JSON.stringify({
                  businessName,
                  informalName,
                  state,
                  streetAddress,
                  city,
                  zip,
                  fullName,
                  email,
                  phone,
                  password,
                  confirmPassword,
                  result
                }),
              },
            });
          }}
        >
          <Text style={styles.continue}>{result ? "Submit" : "Continue"}</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
    justifyContent: "space-between",
  },
  signUp: { color: "#888", fontSize: 12, paddingVertical: "1%" },
  verification: { fontWeight: "bold", fontSize: 30, paddingVertical: "1%" },
  info: { color: "#888", fontSize: 12, paddingVertical: "2%" },
  registrationView: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: "1%",
  },
  reg: { flex: 2, textDecorationLine: "underline", padding: "2%" },
  proof: { flex: 2 },
  icon: { flex: 1 },
  proofView: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    alignItems: "center",
    padding: "1%",
    borderRadius: 20,
  },
  bottom: {
    flex: 0.25,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: { flex: 1, alignItems: "flex-start" },
  continueButton: {
    flex: 3,
    padding: "3%",
    backgroundColor: Colors.app.pressable,
    borderRadius: 50,
  },
  continue: { color: "#fff", textAlign: "center", fontSize: 18 },
});
