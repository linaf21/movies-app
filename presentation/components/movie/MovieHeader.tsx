import React from "react";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

interface IMovieHeaderProps {
  poster: string;
  title: string;
  originalTitle: string;
}

const MovieHeader = ({ poster, title, originalTitle }: IMovieHeaderProps) => {
  const { height } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={{ x: 0, y: 0 }}
        style={{
          height: height * 0.4,
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      />

      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10,
        }}
      >
        <Pressable
          onPress={() => {
            router.dismiss();
          }}
        >
          <Ionicons
            color={"white"}
            name="arrow-back"
            size={30}
            className="shadow-lg"
          />
        </Pressable>
      </View>

      <View
        style={{ height: height * 0.7 }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{
              uri: poster,
            }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>

        <View className="px-5 mt-5">
          <Text className="font-normal">{originalTitle}</Text>
          <Text className="font-semibold text-2xl">{title}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
