import { IMovie } from "@/infrastructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface IMovieHorizontalListProps {
  movies: IMovie[];
  title?: string;
  className?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  movies,
  title,
  className,
  loadNextPage,
}: IMovieHorizontalListProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => (isLoading.current = false), 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage?.();
  };

  return (
    <View className={className}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        data={movies}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} posterPath={item.poster} smallPoster />
        )}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        horizontal
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
