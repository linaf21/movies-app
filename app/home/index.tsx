import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useMovies from "../../presentation/hooks/useMovies";

const HomeScreen = () => {
  const {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedQuery,
    upcomingMoviesQuery,
  } = useMovies();

  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies app</Text>

        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList
          title="Populares"
          movies={popularMoviesQuery.data ?? []}
          className="mb-5"
        />

        <MovieHorizontalList
          title="Mejor calificadas"
          movies={topRatedQuery.data ?? []}
          className="mb-5"
        />

        <MovieHorizontalList
          title="Próximamente en cines"
          movies={upcomingMoviesQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
