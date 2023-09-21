"use client"

import { DataProps } from "@/utils/types";
import { createContext, useContext, useEffect, useState } from "react";

type MyContextProps = {
    movies: DataProps[];
    setMovies: (movies: DataProps[]) => void;
};
type MyProviderProps = {
    children: React.ReactNode;
};

const MoviesContext = createContext({} as MyContextProps);

const MoviesContextProvider = ({ children }: MyProviderProps) => {
    const [movies, setMovies] = useState<DataProps[]>([])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const item = window.sessionStorage.getItem('moviesData');
            if (item !== null) {
                const response = JSON.parse(item);
                console.log(response,'response');
                
                if (response) setMovies(response)
            }
        }
    }, [])

    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovie = () => {
    const context = useContext(MoviesContext);
    const { movies, setMovies } = context;
    return { movies, setMovies };

}
export default MoviesContextProvider;