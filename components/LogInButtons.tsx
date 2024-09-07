import { Image, Pressable, StyleSheet, View } from "react-native";

export function LoginButtons() {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.innerButtonContainer}>
        <Image
          source={require("../assets/images/google-logo.png")}
          style={styles.img}
          height={30}
          width={30}
          resizeMode="contain"
        />
      </Pressable>
      <Pressable style={styles.innerButtonContainer}>
        <Image
          source={require("../assets/images/apple-logo.png")}
          style={styles.img}
          height={30}
          width={30}
          resizeMode="contain"
        />
      </Pressable>
      <Pressable style={styles.innerButtonContainer}>
        <Image
          source={require("../assets/images/facebook-logo.png")}
          style={styles.img}
          height={30}
          width={30}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
  innerButtonContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 80,
    borderColor: "#aaa",
    justifyContent: "center",
  },
  img: { height: 25, width: 40 },
});
