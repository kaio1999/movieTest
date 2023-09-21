"use client"

import * as S from './page.styled'
import Loader from "@/components/Loader";
import Card from "@/components/Cards";
import { useMediaQuery } from "@mui/material";
import React from "react";
import { useMovie } from "@/Provider/MovieContext";
import { DataProps } from '@/utils/types';

export default function Home() {
  const [data, setData] = React.useState<DataProps[]>()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const { movies } = useMovie()

  const isMobile = useMediaQuery('(max-width:758px)');

  React.useEffect(() => {
    setLoading(true)
    const axios = require('axios');

    const url = "http://localhost:3001/products";

    axios.get(url)
      .then((response: { data: DataProps[] }) => {
        setData(response.data);
      })
      .catch(() => {
        setError(true)
      });
    setTimeout(() => {
      setLoading(false)
    }, 1000);
    setLoading(true)
  }, [])

  React.useEffect(() => {
    sessionStorage.setItem('moviesData', JSON.stringify(movies))
  }, [movies])


  return (
    <>
      {error ? <S.ContentError>Desculpe, estamos em manutenção.</S.ContentError> : 
        <S.Container>
        {loading ? (<Loader />) : (
          <S.Content container>
            {data && data.map((movie) => {
              return (
                <S.BoxCard item xs={isMobile ? 12 : 3.8} key={movie.id}>
                  <Card movie={movie} />
                </S.BoxCard>
              )
            })}
          </S.Content>)}
      </S.Container>}
    </>
  )
}
