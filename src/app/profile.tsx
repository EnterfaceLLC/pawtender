import {
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  View,
  Image,
  Button,
} from "react-native";
import React from "react";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";

import { useLocalSearchParams } from "expo-router";
import { colors } from "../theme/colors";

//* DIMENSIONS //
const { width, height } = Dimensions.get("screen");

//DEMO VIDEO
const videoSource =
  "https://videos.pexels.com/video-files/5290685/5290685-hd_1920_1080_25fps.mp4";

const Profile = () => {
  const { id, name, image, video, breed, age, type, des, need, story } =
    useLocalSearchParams();

  //VIDEO
  const player = useVideoPlayer(video, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <SafeAreaView style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        contentFit="cover"
        allowsFullscreen
        allowsPictureInPicture
      />

      <View style={styles.infoContnr}>
        <View style={styles.imgContnr}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.divider} />
        <Text style={styles.age}>Age: {age}</Text>
        <Text style={styles.breed}>Breed: {breed}</Text>
        <Text style={styles.type}>Type: {type}</Text>
        <Text style={styles.des}>Description: {des}</Text>
        <Text style={styles.story}>History: {story}</Text>
        <Text style={styles.need}>Special Needs: {need}</Text>

        <View style={styles.controlsContainer}>
          <Button title="Adopt Me" color={colors.blue} />
        </View>
      </View>

      {/* <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  video: {
    width: width,
    aspectRatio: 4 / 3,
    backgroundColor: "pink",
  },
  controlsContainer: {
    marginTop: 'auto',
    padding: 10,
  },
  infoContnr: {
    flex: 1,
    gap: 15,
    padding: 10,
  },
  name: {
    textAlign: "right",
    color: colors.white,
    fontSize: 36,
    fontWeight: "300",
  },
  breed: {
    color: colors.brown,
    fontSize: 14,
    fontWeight: "300",
  },
  age: {
    color: colors.love,
    fontSize: 14,
    fontWeight: "300",
  },
  type: {
    color: colors.like,
    fontSize: 14,
    fontWeight: "300",
  },
  des: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "300",
  },
  story: {
    color: colors.red,
    fontSize: 14,
    fontWeight: "300",
  },
  need: {
    color: colors.green,
    fontSize: 14,
    fontWeight: "300",
  },
  imgContnr: {
    top: -40,
    left: 10,
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: colors.dark,
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: colors.white,
  },
  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.white,
  },
});
