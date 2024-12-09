import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Input } from "@/src/components/textinput";
import { colors } from "@/src/theme/colors";
import { router } from "expo-router";

const HouseholdInfo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.head}>Tell us about</Text>
          <Text style={styles.subHead}>Your Household</Text>
        </View>
        <View style={{ gap: 20 }}>
          <Input placeholder="street address" title="Address" />
          <Input placeholder="city, state" title="City, State" />
          <Text>*Adoption Counselors have the right to verify home ownership or landlord approval prior to adoption approval.</Text>

          <Pressable
            onPress={() => router.push("/(application)/infoPg2")}
            style={styles.button}
          >
            <Text style={styles.buttonTxt}>Continue</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HouseholdInfo;

const styles = StyleSheet.create({
  main: {
    padding: 10,
    backgroundColor: colors.dark,
  },
  header: {
    marginVertical: 10,
  },
  head: {
    fontSize: 18,
    color: colors.blue,
  },
  subHead: {
    fontSize: 28,
    color: colors.love,
  },
  button: {
    gap: 5,
    padding: 10,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.dark,
  },
});
