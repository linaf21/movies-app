import MovieCast from "@/presentation/components/movie/MovieCast";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import useMovie from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);
  const safeArea = useSafeAreaInsets();

  const { data, isLoading } = movieQuery;

  if (isLoading || !data) {
    return (
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-xl font-bold mb-4">
          Cargando detalles, por favor espere
        </Text>
        <ActivityIndicator color={"blue"} size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ paddingTop: safeArea.top }}>
        <MovieHeader
          originalTitle={data.originalTitle}
          poster={data.poster}
          title={data.title}
        />

        <MovieDescription movie={data} />

        <MovieCast actor={castQuery.data ?? []} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
