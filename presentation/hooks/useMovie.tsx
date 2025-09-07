import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 4,
  });
  return { movieQuery };
};

export default useMovie;
