import Swipeable from "react-native-gesture-handler/Swipeable";
import { Modes } from "@/constants/Modes";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Farming() {
  const [MODE, setMODE] = useState<any>(0);
  return (
    <View style={{ ...styles.root, backgroundColor: Modes[MODE].color }}>
      <View
        style={{ ...styles.root, alignItems: "center" }}
        onTouchStart={() => {
          setMODE((m: any) => {
            return (m + 1) % 3;
          });
        }}
      >
        <Image
          style={styles.image}
          source={Modes[MODE].source}
          // tintColor={MODE.color}
          resizeMode="contain"
        />
      </View>
      <View style={styles.modeContainer}>
        <Text style={styles.mode}>{Modes[MODE].type}</Text>
        <Text style={styles.description}>{Modes[MODE].description}</Text>
        <View>{/* triple dots inside */}</View>
        <Pressable
          style={{
            ...styles.joinContainer,
            backgroundColor: Modes[MODE].color,
          }}
        >
          <Text style={styles.joinText}>Join the movement!</Text>
        </Pressable>
        <Text
          style={styles.login}
          onPress={() => {
            // go to login page
            router.navigate({ pathname: "/login" });
          }}
        >
          Login
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1 },
  image: { flex: 1 },
  modeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 40,
    padding: "2%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mode: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: { textAlign: "center", padding: "5%" },
  joinContainer: {
    padding: "5%",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#fff",
  },
  joinText: { textAlign: "center", color: "#fff", fontSize: 18 },
  login: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontWeight: "bold",
    padding: "2%",
  },
});
