import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        options={{ title: "FarmerEats", headerBackVisible: false }}
      />
      <Stack.Screen
        name="farm-info"
        options={{ title: "FarmerEats", headerBackVisible: false }}
      />
      <Stack.Screen
        name="verification"
        options={{ title: "FarmerEats", headerBackVisible: false }}
      />
      <Stack.Screen
        name="hours"
        options={{ title: "FarmerEats", headerBackVisible: false }}
      />
      <Stack.Screen name="confirmation" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{ title: "FarmerEats", headerBackVisible: false }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{ title: "FarmerEats", headerBackVisible: false }}
      />
      <Stack.Screen
        name="verify-otp"
        options={{ title: "FarmerEats", headerBackVisible: false }}
      />
      <Stack.Screen
        name="reset-password"
        options={{ title: "FarmerEats", headerBackVisible: false }}
      />
    </Stack>
  );
}
