// import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
// import { useSharedValue } from "react-native-reanimated";
// import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { SwipeDeck } from "react-native-swipeable-deck";

// const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

const data = [
  { id: "1", text: "Card 1", img: "https://picsum.photos/id/237/300/300" },
  { id: "2", text: "Card 2", img: "https://picsum.photos/id/219/300/300" },
  { id: "3", text: "Card 3", img: "https://picsum.photos/id/582/300/300" },
  { id: "4", text: "Card 3", img: "https://picsum.photos/id/582/300/300" },
  { id: "5", text: "Card 3", img: "https://picsum.photos/id/582/300/300" },
  { id: "6", text: "Card 3", img: "https://picsum.photos/id/582/300/300" },
  { id: "7", text: "Card 3", img: "https://picsum.photos/id/582/300/300" },
  { id: "8", text: "Card 3", img: "https://picsum.photos/id/582/300/300" },
  { id: "9", text: "Card 3", img: "https://picsum.photos/id/582/300/300" },
];

export default function Index() {
  //   const ref = React.useRef<ICarouselInstance>(null);
  //   const progress = useSharedValue<number>(0);

  const renderCard = (item) => {
    return (
      <View style={styles.card}>
        {/* <Text>{item.text}</Text> */}
        <Image
          source={{ uri: item.img }}
          style={{ width: "100%", height: "100%", backgroundColor: "pink" }}
          resizeMode="contain"
        />
      </View>
    );
  };

  const onSwipeRight = (item) => {
    console.log("Swiped right:", item);
  };

  const onSwipeLeft = (item) => {
    console.log("Swiped left:", item);
  };

  const renderNoMoreCards = () => {
    return (
      <View style={styles.card}>
        <Text>No more cards</Text>
      </View>
    );
  };

  const handleEndReached = () => {
    console.log("End of cards reached");
  };

  return (
    // <View style={{ flex: 1 }}>
    //   <Carousel
    //     ref={ref}
    //     width={width}
    //     height={width / 2}
    //     data={data}
    //     // onProgressChange={progress}
    //     renderItem={({ index }) => (
    //       <View
    //         style={{
    //           flex: 1,
    //           borderWidth: 1,
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
    //       </View>
    //     )}
    //   />
    // </View>

    <View style={{ flex: 1, margin: 5 }}>
      <SwipeDeck
        renderCard={renderCard}
        data={data}
        indentSideMultiplier={0}
        indentTopMultiplier={1.5}
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
        renderNoMoreCards={renderNoMoreCards}
        handleEndReached={handleEndReached}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: width-25,
    height: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
});
