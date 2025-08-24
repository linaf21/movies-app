import { FlatList, Text, View } from "react-native";
import useMovies from "../../presentation/hooks/useMovies";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();

  return (
    <View>
      {nowPlayingQuery.isLoading && <Text>Loading...</Text>}
      {nowPlayingQuery.isError && <Text>Error loading movies</Text>}
      {nowPlayingQuery.data && (
        <FlatList
          data={nowPlayingQuery.data}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default HomeScreen;
