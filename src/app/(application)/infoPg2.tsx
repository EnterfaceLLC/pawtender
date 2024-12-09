import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Input } from "@/src/components/textinput";
import { colors } from "@/src/theme/colors";
import { router } from "expo-router";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";

const HouseholdInfo = () => {
  const houseButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Home Owner",
        value: "own",
      },
      {
        id: "2",
        label: "Currenlty Renting",
        value: "rent",
      },
    ],
    []
  );

  const houseTypeButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "House",
        value: "house",
      },
      {
        id: "2",
        label: "Mobile",
        value: "mobilehome",
      },
      {
        id: "3",
        label: "Apt/Townhome",
        value: "apt/townhome",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [typeId, setTypeId] = useState<string | undefined>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.head}>Tell us about</Text>
          <Text style={styles.subHead}>Your Home</Text>
        </View>
        <View style={{ gap: 20 }}>
          <Text style={styles.genTxt}>
            *Adoption Counselors have the right to verify home ownership or
            landlord approval prior to adoption approval.
          </Text>

          <RadioGroup
            radioButtons={houseButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
            labelStyle={{ color: colors.white }}
          />
          <RadioGroup
            radioButtons={houseTypeButtons}
            onPress={setTypeId}
            selectedId={typeId}
            layout="row"
            labelStyle={{ color: colors.white }}
          />
          <Input placeholder="street address" title="Address" />
          <Input placeholder="city, state" title="City, State" />
          <Text style={[styles.genTxt, { fontWeight: "500" }]}>
            If curerently renting, complete below
          </Text>
          <Input placeholder="enter name" title="Landlord | Apt. Name" />
          <Input placeholder="phone #" title="Phone" />
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
  genTxt: {
    color: colors.white,
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
