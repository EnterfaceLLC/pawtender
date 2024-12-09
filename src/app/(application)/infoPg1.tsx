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

const SenderInfo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.head}>Let's get started</Text>
          <Text style={styles.subHead}>Adoption Profile</Text>
        </View>
        <View style={{ gap: 20 }}>
          <Input placeholder="first, last name" title="Primary Contact" />
          <Input placeholder="phone #" title="Primary Phone" />
          <Input placeholder="email" title="Primary Email" />
          <Input placeholder="first, last name" title="Secondary Contact" />
          <Input placeholder="phone #" title="Secondary Phone" />

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

export default SenderInfo;

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
