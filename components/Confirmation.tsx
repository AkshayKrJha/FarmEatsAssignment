import { Colors } from "@/constants/Colors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Confirmation() {
  return (
    <View style={styles.root}>
      <View style={styles.inner}>
        <Image
          source={require("../assets/images/tick.png")}
          style={styles.tick}
          resizeMode="contain"
        />
        <Text style={styles.done}>You're all done!</Text>
        <Text style={styles.info}>
          Hang tight! We are currently reviewing your account and will follow up
          with you in 2-3 business days. In the meantime, you can setup your
          inventory.
        </Text>
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.button}>
          <Text style={styles.got}>Got it!</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: "5%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  tick:{height:80,width:120},
  inner: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 6,
  },
  done: { fontSize: 35, fontWeight: "bold", padding: "2%" },
  info: {
    fontSize: 15,
    color: "#aaa",
    textAlign: "justify",
    fontWeight: "light",
    padding: "1%",
  },
  bottom: { justifyContent: "center", flex: 1 },
  button: {
    borderRadius: 50,
    backgroundColor: Colors.app.pressable,
    padding: "2%",
  },
  got: { color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 20 },
});
