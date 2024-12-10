import { AxiosError } from "axios";
import { api } from "./tmdbConnection";
import { IMovies } from "../model/IMovies";

export const searchMoviesByName = async (searchTerm: string): Promise<IMovies[]> => {
  try {
    const { data } = await api.get("search/movie", {
      params: {
        query: searchTerm,  
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
  } catch (error: AxiosError | any) {
    console.error("Error fetching movies by name:", error.response || error);
    return [];
  }
};
