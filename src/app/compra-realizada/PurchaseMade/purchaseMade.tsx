"use client"

import React from "react";
import * as S from './styled'
import Success from "../../../../public/success.png";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import { useMovie } from "@/Provider/MovieContext";

export default function PurchaseMade() {
  const { movies, setMovies } = useMovie()

  const router = useRouter()

  const isMobile = useMediaQuery('(max-width:758px)');

  const handleBack = () => {
    router.push('/')
  }

  React.useEffect(() => {
    setMovies([]);
  },[])

  return (
    <S.Container>
      <S.Content>
          <S.TextEmpt>
            {isMobile ? 'Compra realizada\ncom sucesso!' : 'Compra realizada com sucesso!'}
          </S.TextEmpt>
          <S.ImageEmpty src={Success.src} />
          <S.BackHome onClick={handleBack}>VOLTAR</S.BackHome>
        </S.Content>
    </S.Container>
  )
}
