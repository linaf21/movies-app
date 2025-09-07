import { IMovie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface IMovieHorizontalListProps {
  movies: IMovie[];
  title?: string;
  className?: string;
}

const MovieHorizontalList = ({
  movies,
  title,
  className,
}: IMovieHorizontalListProps) => {
  return (
    <View className={className}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        data={movies}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} posterPath={item.poster} smallPoster />
        )}
        keyExtractor={(item) => `${item.id}`}
        horizontal
      />
    </View>
  );
};

export default MovieHorizontalList;
