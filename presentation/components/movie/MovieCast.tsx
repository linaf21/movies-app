import { Cast } from "@/infrastructure/interfaces/cast";
import React from "react";
import { FlatList, View } from "react-native";
import { ActorCard } from "../Cast/ActorCard";

interface IMovieCastProps {
  actor: Cast[];
}

const MovieCast = ({ actor }: IMovieCastProps) => {
  return (
    <View>
      <FlatList
        data={actor}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        horizontal
        className="mt-5 -ml-5"
      />
    </View>
  );
};

export default MovieCast;
