import { Colors } from "@/constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";

export default function SignUpPage2() {
  const [businessName, setBusinessName] = useState("");
  const [informalName, setInformalName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const { page1Details }: any = useLocalSearchParams();
  const { fullName, email, phone, password, confirmPassword } =
    JSON.parse(page1Details);
  return (
    <View style={styles.root}>
      <Text style={styles.signUp}>
        Signup 2 of 4{"\n\n"}
        <Text style={styles.farm}>Farm Info</Text>
      </Text>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <TextInput
            style={styles.input}
            label={"Business Name"}
            value={businessName}
            onChangeText={(name) => setBusinessName(name)}
            left={<TextInput.Icon icon="card-outline" />}
          />
          <TextInput
            style={styles.input}
            label={"Informal Name"}
            value={informalName}
            onChangeText={(name) => setInformalName(name)}
            left={<TextInput.Icon icon="emoticon-happy-outline" />}
          />
          <TextInput
            style={styles.input}
            label={"Street Address"}
            value={streetAddress}
            onChangeText={(address) => setStreetAddress(address)}
            left={<TextInput.Icon icon="home-outline" />}
          />
          <TextInput
            style={styles.input}
            label={"City"}
            value={city}
            onChangeText={(name) => setCity(name)}
            left={<TextInput.Icon icon="map-marker-outline" />}
          />
          <View style={styles.horizontalInput}>
            <TextInput
              style={styles.state}
              label={"State"}
              value={state}
              onChangeText={(name) => setState(name)}
              // editable={false}
              // right={<TextInput.Icon icon={"menu-down"} onPress={()=>{}}/>}
            />
            <TextInput
              style={styles.zipCode}
              label={"Enter Zipcode"}
              value={zip}
              onChangeText={(name) => setZip(name)}
            />
          </View>
        </ScrollView>
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
            console.log("Extra params", fullName, email, phone);
            router.navigate({
              pathname: "/verification",
              params: {
                page2Details: JSON.stringify({
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
                }),
              },
            });
          }}
        >
          <Text style={styles.continue}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, padding: "4%", justifyContent: "space-between" },
  signUp: {
    fontSize: 12,
    color: "#888",
    // flex: 1,
    // backgroundColor: "#0ff",
    paddingVertical: "5%",
    // alignContent: "center",
    // justifyContent: "center",
  },
  farm: { fontSize: 25, fontWeight: "bold", color: "#000" },
  input: { marginVertical: "5%" },
  scrollContainer: { flex: 4 },
  horizontalInput: { flexDirection: "row" },
  state: { flex: 2, margin: "1%" },
  zipCode: { flex: 3, margin: "1%" },
  bottom: {
    flex: 1,
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
