//* EXPO ROUTER //
import { router } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";

//* RN //
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

//* SWIPEDECK //
import { SwipeDeck } from "react-native-swipeable-deck";

//* DIMENSIONS FN)
const { width, height } = Dimensions.get("screen");

//* MOCK DATA //
const data = [
  {
    id: 1,
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    image: "https://picsum.photos/id/237/300/300",
    type: "Dog",
  },
  {
    id: 2,
    name: "Whiskers",
    age: 2,
    breed: "Maine Coon",
    image: "https://picsum.photos/id/1074/300/300",
    type: "Cat",
  },
  {
    id: 3,
    name: "Luna",
    age: 1,
    breed: "Labrador Retriever",
    image: "https://picsum.photos/id/237/300/300",
    type: "Dog",
  },
  {
    id: 4,
    name: "Mittens",
    age: 4,
    breed: "Siamese",
    image: "https://picsum.photos/id/1062/300/300",
    type: "Cat",
  },
  {
    id: 5,
    name: "Max",
    age: 5,
    breed: "German Shepherd",
    image: "https://picsum.photos/id/659/300/300",
    type: "Dog",
  },
  {
    id: 6,
    name: "Cleo",
    age: 3,
    breed: "Bengal",
    image: "https://picsum.photos/id/237/300/300",
    type: "Cat",
  },
  {
    id: 7,
    name: "Bella",
    age: 2,
    breed: "Beagle",
    image: "https://picsum.photos/id/237/300/300",
    type: "Dog",
  },
  {
    id: 8,
    name: "Shadow",
    age: 6,
    breed: "Persian",
    image: "https://picsum.photos/id/237/300/300",
    type: "Cat",
  },
  {
    id: 9,
    name: "Rocky",
    age: 4,
    breed: "Bulldog",
    image: "https://picsum.photos/id/237/300/300",
    type: "Dog",
  },
  {
    id: 10,
    name: "Daisy",
    age: 1,
    breed: "Ragdoll",
    image: "https://picsum.photos/id/1025/300/300",
    type: "Cat",
  },
];

//* TYPES //
type itemProps = {
  id: number;
  name: string;
  age: number;
  breed: string;
  image: string;
  type: string;
};

//* WELCOME SCREEN //
export default function Index() {
  const renderCard = (item: itemProps) => {
    return (
      <View style={styles.card}>
        <View>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.infoContnr}>
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subTitle}>{item.breed}</Text>
            </View>
            <FontAwesome
              name="paw"
              size={35}
              color="green"
              onPress={() => router.push("/profile")}
            />
            <FontAwesome name="heart" size={35} color="red" />
          </View>
        </View>
      </View>
    );
  };

  const onSwipeRight = (item: any) => {
    console.log(item);
  };

  const onSwipeLeft = (item: any) => {
    console.log(item);
  };

  const renderNoMoreCards = () => {
    return (
      <View style={styles.card}>
        <Text>Be sure to see</Text>
        <Text>the pets you liked!</Text>
      </View>
    );
  };

  const handleEndReached = () => {
    console.log("End of cards reached");
  };

  return (
    <View style={styles.main}>
      <Text>Swipe Left or Right</Text>
      <SwipeDeck
        renderCard={renderCard}
        data={data}
        indentSideMultiplier={0}
        indentTopMultiplier={0.5}
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
        renderNoMoreCards={renderNoMoreCards}
        handleEndReached={handleEndReached}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  card: {
    marginTop: 25,
    alignSelf: "center",
    width: width - 25,
    height: height / 2 + 25,
    backgroundColor: "#F0F0F0",
    borderWidth: 0.5,
    borderColor: "#D0D0D0",
    borderRadius: 15,
    // padding: 10,
  },
  infoContnr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    padding: 5,
    left: 0,
    bottom: 0,
    zIndex: 10,
    position: "absolute",
    // backgroundColor: "lightgrey",
  },
  image: { width: "100%", height: "100%", borderRadius: 10 },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 18,
    color: "white",
    padding: 5,
    // backgroundColor: "lightgrey",
    fontWeight: "500",
    borderRadius: 5,
  },
});
