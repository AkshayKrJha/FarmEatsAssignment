import { signUp } from "@/API/api-functions";
import { Colors } from "@/constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function SignUpPage4() {
  const days = [
    { d: "M", day: "mon" },
    { d: "T", day: "tue" },
    { d: "W", day: "wed" },
    { d: "Th", day: "thu" },
    { d: "F", day: "fri" },
    { d: "S", day: "sat" },
    { d: "Su", day: "sun" },
  ];
  const slots = [
    "8:00am - 10:00am",
    "10:00am - 1:00pm",
    "1:00pm - 4:00pm",
    "4:00pm - 7:00pm",
    "7:00pm - 10:00pm",
  ];
  const { page3Details }: any = useLocalSearchParams();
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
    result,
  } = JSON.parse(page3Details);
  useEffect(() => {
    console.log(JSON.parse(page3Details));
  }, [page3Details]);
  async function signUpWithAPI(
    businessName: any,
    informalName: any,
    state: any,
    streetAddress: any,
    city: any,
    zip: any,
    fullName: any,
    email: any,
    phone: any,
    password: any,
    confirmPassword: any,
    result: any,
    businessHours: any
  ) {
    const response = await signUp(
      fullName,
      email,
      phone,
      password,
      businessName,
      informalName,
      streetAddress,
      city,
      state,
      zip,
      result,
      businessHours
    );
    console.log("SignUp Response", response);
    alert(response?.message);
    if (response?.success) {
      router.navigate("/confirmation");
    }
  }
  const [businessHours, setBusinessHours] = useState<any>({});
  const [selectedDay, setSelectedDay] = useState<any>(days[0].day);
  function addSlot(day: string, slot: string) {
    // add day and slot to business hours
    setBusinessHours((value: any) => {
      const businessHours = { ...value };
      if (!businessHours[day]) businessHours[day] = [];
      if (businessHours[day]?.includes(slot)) {
        let slots = [...businessHours[day]];
        businessHours[day] = slots.filter((v) => {
          return v !== slot;
        });
        if (!businessHours[day]?.length) delete businessHours[day];
      } else businessHours[day]?.push(slot);
      return businessHours;
    });
  }
  return (
    <View style={styles.root}>
      <Text>
        <Text style={styles.signUp}>Signup 4 of 4</Text>
        {"\n\n"}
        <Text style={styles.business}>Business Hours</Text>
        {"\n\n\n"}
        <Text style={styles.info}>
          Choose the hours your farm is open for pickups. This will allow
          customers to order deliveries.
        </Text>
        {"\n\n\n"}
      </Text>
      <View style={styles.daysContainer}>
        {days.map((d, i) => {
          return (
            <Pressable
              key={i}
              style={{
                ...styles.days,
                backgroundColor:
                  d.day === selectedDay
                    ? Colors.app.pressable
                    : businessHours[d.day]?.length
                    ? styles.slot.backgroundColor
                    : styles.days.backgroundColor,
              }}
              onPress={() => {
                setSelectedDay(d.day);
              }}
            >
              <Text
                style={{
                  ...styles.daysText,
                  color:
                    d.day === selectedDay
                      ? "#fff"
                      : businessHours[d.day]?.length
                      ? "#000"
                      : styles.daysText.color,
                }}
              >
                {d.d}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <FlatList
        data={slots.map((slot, id) => {
          return { slot, id };
        })}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={{
                ...styles.slot,
                backgroundColor: businessHours[selectedDay]?.includes(item.slot)
                  ? "#F8C569"
                  : styles.slot.backgroundColor,
              }}
              onPress={() => {
                // add slot in state
                addSlot(selectedDay, item.slot);
              }}
            >
              <Text style={styles.slotText}>{item.slot}</Text>
            </Pressable>
          );
        }}
      />
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
          onPress={async () => {
            // signup with all the details
            await signUpWithAPI(
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
              result,
              businessHours
            );
          }}
        >
          <Text style={styles.continue}>Signup</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", padding: "5%" },
  signUp: { color: "#888", fontSize: 14, padding: "1%" },
  business: { fontSize: 30, padding: "1%", fontWeight: "bold" },
  info: { color: "#888", fontSize: 12, padding: "1.5%" },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "5%",
  },
  days: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 10,
    padding: "2%",
  },
  daysText: { color: "#888", fontSize: 15 },
  slot: {
    padding: "2%",
    borderRadius: 20,
    backgroundColor: "#261C1214",
    margin: "1%",
    width: "50%",
  },
  slotText: { textAlign: "center" },
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
