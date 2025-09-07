import Formatter from "@/config/helper/formatter";
import { IMovieDetails } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { Text, View } from "react-native";

interface IMovieDescriptionProps {
  movie: IMovieDetails;
}

const MovieDescription = ({ movie }: IMovieDescriptionProps) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row items-center">
        <Text className="font-semibold text-lg">{movie.rating}</Text>
        <Text className="font-semibold text-lg">
          {" "}
          - {movie.genres.join(", ")}.
        </Text>
      </View>

      <Text className="mt-5 font-bold">Historia</Text>
      <Text className="mt-2 font-normal">{movie.description}</Text>

      <Text className="mt-2 font-bold">{Formatter.currency(movie.budget)}</Text>
    </View>
  );
};

export default MovieDescription;
