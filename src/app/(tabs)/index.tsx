//* REACT, RN //
import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Pressable,
  SafeAreaView,
} from "react-native";

//* RN TINDER CARD //
import { TinderCard } from "rn-tinder-card";

//* EXPO ROUTER //F
import { router } from "expo-router";

//* ICON //
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

//* MOCK DATA //
import pets from "../../../assets/data/mock.json";
import { colors } from "../../theme/colors";

//* DIMENSIONS //
const { width, height } = Dimensions.get("screen");

//* WELCOME SCREEN //
export default function Welcome() {
  const OverlayRight = () => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: colors.love,
          },
        ]}
      >
        <Text style={styles.overlayLoveText}>I Love</Text>
      </View>
    );
  };
  const OverlayLeft = () => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: colors.like,
          },
        ]}
      >
        <Text style={styles.overlayLikeText}>I Like</Text>
      </View>
    );
  };
  const OverlayTop = () => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: colors.need,
          },
        ]}
      >
        <Text style={styles.overlayNeedText}>I Need</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleContnr}>
        <Text style={styles.entity}>Helping Hands Humane Society</Text>
        <Text style={styles.title}><Text style={{color: colors.love}}>Fur</Text>Ever Home</Text>
      </View>
      {pets.map((item, index) => {
        return (
          <View
            style={styles.cardContainer}
            pointerEvents="box-none"
            key={index}
          >
            <TinderCard
              cardWidth={width - 50}
              cardHeight={height / 2 + 75}
              OverlayLabelRight={OverlayRight}
              OverlayLabelLeft={OverlayLeft}
              OverlayLabelTop={OverlayTop}
              cardStyle={styles.card}
              onSwipedRight={() => {
                console.log("Swiped right");
              }}
              onSwipedTop={() => {
                console.log("Swiped Top");
                router.push({
                  pathname: "/profile",
                  params: {
                    id: item.id,
                    name: item.name,
                    image: item?.image,
                    video: item.video,
                    breed: item.breed,
                    age: item.age,
                    type: item.type,
                    des: item.bio.description,
                    need: item.bio.specialNeeds,
                    story: item.bio.history,
                  },
                });
              }}
              onSwipedLeft={() => {
                console.log("Swiped left");
              }}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.linkContnr}>
                <Pressable style={styles.iconContnr}>
                  <Ionicons
                    name="happy-outline"
                    size={30}
                    color={colors.like}
                  />
                </Pressable>

                <Pressable
                  style={styles.iconContnr}
                  onPress={() =>
                    router.push({
                      pathname: "/profile",
                      params: {
                        id: item.id,
                        name: item.name,
                        image: item?.image,
                        video: item.video,
                        breed: item.breed,
                        age: item.age,
                        type: item.type,
                        des: item.bio.description,
                        need: item.bio.specialNeeds,
                        story: item.bio.history,
                      },
                    })
                  }
                >
                  <AntDesign name="staro" size={30} color={colors.blue} />
                </Pressable>

                <Pressable style={styles.iconContnr}>
                  <FontAwesome name="heart-o" size={30} color={colors.love} />
                </Pressable>
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.breed}>{item.breed}</Text>
              </View>
            </TinderCard>
          </View>
        );
      })}

      <StatusBar backgroundColor={colors.dark} barStyle={"light-content"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.white,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  linkContnr: {
    top: 0,
    gap: 30,
    right: 0,
    padding: 15,
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconContnr: {
    padding: 9,
    borderRadius: 20,
    backgroundColor: colors.dark,
  },
  cardInfo: {
    right: 0,
    bottom: 0,
    padding: 15,
    position: "absolute",
  },
  titleContnr: {
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  entity: {
    fontSize: 12,
    color: colors.grey,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    color: colors.blue,
  },
  name: {
    fontSize: 34,
    color: "white",
    fontWeight: "700",
  },
  breed: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
  overlayLabelContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  overlayNeedText: { color: colors.needTxt, fontSize: 32, fontWeight: "bold" },
  overlayLoveText: { color: colors.loveTxt, fontSize: 32, fontWeight: "bold" },
  overlayLikeText: { color: colors.likeTxt, fontSize: 32, fontWeight: "bold" },
});
