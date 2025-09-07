import useMovie from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id);
  const safeArea = useSafeAreaInsets();

  if (movieQuery.isLoading) {
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
        <Text className="text-3xl font-bold">
          {movieQuery.data?.title ?? "Sin título"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
