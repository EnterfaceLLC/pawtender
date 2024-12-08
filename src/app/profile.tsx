import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { useLocalSearchParams } from "expo-router";

const Profile = () => {
  const { id, name, image, breed, age, des, need, story } =
    useLocalSearchParams();

  return (
    <View>
      <Text>Id: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Breed: {breed}</Text>
      <Text>Description: {des}</Text>
      <Text>History: {story}</Text>
      <Text>Special Needs: {need}</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
