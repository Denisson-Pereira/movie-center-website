import { AxiosError } from "axios";
import { api } from "./tmdbConnection";
import { IMovies } from "../model/IMovies";

export const getMoviesNowPlaying = async () => {
  try {
    const { data } = await api.get("movie/now_playing", {
      params: {
        language: "pt-BR",
        page: 1,
      },
    });
    if (data && data.results) {
      const movies: IMovies[] = data.results;
      return movies;
    } else {
      return [];
    }
  } catch ({ response }: AxiosError | any) {
    console.error(response);
    return [];
  }
};
