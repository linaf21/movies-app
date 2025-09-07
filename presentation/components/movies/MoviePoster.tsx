import { router } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

interface IMoviePosterProps {
  id: number;
  posterPath: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({
  id,
  posterPath,
  smallPoster,
  className,
}: IMoviePosterProps) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}
    onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: posterPath }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
      />
    </Pressable>
  );
};

export default MoviePoster;
