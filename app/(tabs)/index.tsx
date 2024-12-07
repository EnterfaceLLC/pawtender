//* REACT, RN //
import * as React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

//* RN TINDER CARD //
import { TinderCard } from "rn-tinder-card";

//* MOCK DATA //
import pets from "../../assets/data/mock.json";

const { width, height } = Dimensions.get("screen");

//* WELCOME SCREEN //
export default function Welcome() {
  const OverlayRight = () => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "pink",
          },
        ]}
      >
        <Text style={styles.overlayLabelText}>Love</Text>
      </View>
    );
  };
  const OverlayLeft = () => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "green",
          },
        ]}
      >
        <Text style={styles.overlayLabelText}>Like</Text>
      </View>
    );
  };
  const OverlayTop = () => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "blue",
          },
        ]}
      >
        <Text style={styles.overlayLabelText}>I Need</Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      {pets.map((item, index) => {
        return (
          <View
            style={styles.cardContainer}
            pointerEvents="box-none"
            key={index}
          >
            <TinderCard
              cardWidth={width - 50}
              cardHeight={height / 2}
              OverlayLabelRight={OverlayRight}
              OverlayLabelLeft={OverlayLeft}
              OverlayLabelTop={OverlayTop}
              cardStyle={styles.card}
              onSwipedRight={() => {
                console.log("Swiped right");
              }}
              onSwipedTop={() => {
                console.log("Swiped Top");
              }}
              onSwipedLeft={() => {
                console.log("Swiped left");
              }}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
            </TinderCard>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  overlayLabelContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayLabelText: { color: "white", fontSize: 32, fontWeight: "bold" },
});
