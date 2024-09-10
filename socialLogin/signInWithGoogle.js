import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export async function onGoogleButtonPress() {
  GoogleSignin.configure({
    webClientId:
      "3952280083-3gtnorhjahgiug7b5sa0gh8qlfh66fec.apps.googleusercontent.com",
  });
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const response = await GoogleSignin.signIn();
  const { idToken } = response.data;

  // Create a Google credential with the token
  console.log("SignIn response", response);

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
