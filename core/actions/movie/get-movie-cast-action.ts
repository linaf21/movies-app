import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { movieApi } from "../../api/movie-api";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`
    );

    return data.cast.map(MovieMapper.fromTheMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
