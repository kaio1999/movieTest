"use client";

import * as S from "./styled";
import AddCart from "../../../public/mdaddshoppingcart 1.svg";
import amountsOfMovies from "@/utils/amountsOfMovies";
import { useMovie } from "@/Provider/MovieContext";
import { DataProps } from "@/utils/types";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

interface CardProps {
  movie: DataProps;
}

export default function Card({ movie }: CardProps) {
  const { movies, setMovies } = useMovie();

  const moviesArray = Object.values(movies);

  const handleAddCart = (choice: DataProps) => {
    setMovies({ ...movies, [moviesArray.length + 1]: choice });
  };

  const isMobile = useMediaQuery("(max-width:758px)");

  return (
    <S.Wrapper isMobile={isMobile} >
      <S.BoxImage>
        <Image src={movie.image} width={147} height={188} alt={movie.title} />
      </S.BoxImage>
      <div>
        <S.Text>{movie.title}</S.Text>
        <S.Price>{`R$ ${movie.price.toFixed(2).replace(".", ",")}`}</S.Price>
      </div>
      <S.AddCart
        itsInTheCart={moviesArray.some(
          (item) => (item as DataProps).id === movie.id
        )}
        onClick={() => handleAddCart(movie)}
      >
        <Image src={AddCart.src} alt={"cart"} width={14} height={14} />
        <S.Qty>{amountsOfMovies(moviesArray, movie.id)}</S.Qty>
        <p>
          {moviesArray.some((item) => (item as DataProps).id === movie.id)
            ? "ITEM ADICIONADO"
            : "ADICIONAR AO CARRINHO"}
        </p>
      </S.AddCart>
    </S.Wrapper>
  );
}
