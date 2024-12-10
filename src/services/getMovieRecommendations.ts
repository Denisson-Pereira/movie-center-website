import { AxiosError } from "axios";
import { api } from "./tmdbConnection";
import { IMovies } from "../model/IMovies";


export const getRecommendedMovies = async (): Promise<IMovies[]> => {
  try {
    const { data } = await api.get("movie/popular", {
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
  } catch (error: AxiosError | any) {
    console.error("Error fetching recommended movies:", error.response || error);
    return [];
  }
};
