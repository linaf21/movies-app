import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useMovies from "../../presentation/hooks/useMovies";

const HomeScreen = () => {
  const { nowPlayingQuery, popularMoviesQuery } = useMovies();

  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={30} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">Movies app</Text>

      <MainSlideshow movies={nowPlayingQuery.data ?? []} />

      <MovieHorizontalList title="Populares" movies={popularMoviesQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
