"use client";

import React from "react";
import * as S from "./styled";
import CartEmpty from "../../../../public/Group.png";
import Less from "../../../../public/Less.png";
import More from "../../../../public/More.png";
import Bin from "../../../../public/bin.svg";
import { useRouter } from "next/navigation";
import { Grid, useMediaQuery } from "@mui/material";
import amountsOfMovies from "@/utils/amountsOfMovies";
import { useMovie } from "@/Provider/MovieContext";
import { DataProps } from "@/utils/types";
import Image from "next/image";

export default function Cart() {
  const { movies, setMovies } = useMovie();

  const isMobile = useMediaQuery("(max-width:758px)");

  const router = useRouter();

  const dataArray = Object.values(movies);

  const Total: number = dataArray.reduce(
    (a: number, b: DataProps) => a + b.price,
    0
  );

  const newData = Object.values(movies).filter(
    (item: DataProps, index, array) => {
      return array.findIndex((i: DataProps) => i.id === item.id) === index;
    }
  );

  const handleBack = () => {
    router.push("/");
  };

  const handlePurchase = () => {
    router.push("/compra-realizada");
  };

  React.useEffect(() => {
    sessionStorage.setItem("moviesData", JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (choice: DataProps) => {
    const keys = Object.keys(movies);
    const newKey = keys.length > 0 ? Number(keys[keys.length - 1]) + 1 : 1;
    setMovies({ ...movies, [newKey]: choice });
  };

  const handleRemoveMovie = (choice: DataProps) => {
    for (const key in movies) {
      if (movies.hasOwnProperty(key)) {
        const innerObject = movies[key];
        if (JSON.stringify(innerObject) === JSON.stringify(choice)) {
          delete movies[key];
          break;
        }
      }
    }
    setMovies({ ...movies });
  };

  const handleRemoveAllMovies = (choice: DataProps) => {
    const updatedMovies = { ...movies };

    for (const key in updatedMovies) {
      if (updatedMovies.hasOwnProperty(key)) {
        const innerObject = updatedMovies[key];
        if (JSON.stringify(innerObject) === JSON.stringify(choice)) {
          delete updatedMovies[key];
        }
      }
    }
    setMovies(updatedMovies);
  };

  return (
    <S.Container>
      {dataArray.length === 0 ? (
        <S.Content>
          <S.TextEmpt>
            {isMobile
              ? "Parece que não\nhá nada por aqui :("
              : "Parece que não há nada por aqui :("}
          </S.TextEmpt>
          <S.ImageEmpty src={CartEmpty.src} />
          <S.BackHome onClick={handleBack}>VOLTAR</S.BackHome>
        </S.Content>
      ) : isMobile ? (
        <S.Content moviesExist={dataArray.length !== 0}>
          <S.BoxCards>
            {newData.map((item) => {
              return (
                <S.BoxMovie key={item.title}>
                  <Image src={item.image} width={89} height={114} alt={""} />
                  <S.WrapperMovie>
                    <S.BoxPrice>
                      <S.Text>{item.title}</S.Text>
                      <S.TextMobile>{`R$ ${item.price
                        .toFixed(2)
                        .replace(".", ",")}`}</S.TextMobile>
                      <Image
                        src={Bin.src}
                        width={16}
                        height={18}
                        onClick={() => handleRemoveAllMovies(item)}
                        alt={""}
                      />
                    </S.BoxPrice>
                    <S.BoxMoviesValue>
                      <S.BoxInput>
                        <img
                          src={Less.src}
                          onClick={() => handleRemoveMovie(item)}
                          style={{ cursor: "pointer" }}
                          alt={""}
                        />
                        <S.InputNumber
                          value={amountsOfMovies(dataArray, item.id)}
                        />
                        <img
                          src={More.src}
                          onClick={() => handleAddMovie(item)}
                          style={{ cursor: "pointer" }}
                          alt={""}
                        />
                      </S.BoxInput>
                      <S.BoxSubTotal>
                        <S.Title>SUBTOTAL</S.Title>
                        <S.PriceText>{`R$ ${(
                          item.price * amountsOfMovies(dataArray, item.id)
                        )
                          .toFixed(2)
                          .replace(".", ",")}`}</S.PriceText>
                      </S.BoxSubTotal>
                    </S.BoxMoviesValue>
                  </S.WrapperMovie>
                </S.BoxMovie>
              );
            })}
          </S.BoxCards>
          <S.BoxFooter>
            <S.Divider />
            <S.BoxTotalMobile>
              <S.TotalText  isMobile={isMobile}>TOTAL</S.TotalText>
              <S.TotalPrice>{`R$ ${Total.toFixed(2)}`}</S.TotalPrice>
            </S.BoxTotalMobile>
            <S.PurchaseMobile onClick={handlePurchase}>
              FINALIZAR PEDIDO
            </S.PurchaseMobile>
          </S.BoxFooter>
        </S.Content>
      ) : (
        <S.Content>
          <Grid container>
            <Grid item xs={5}>
              <S.Title>PRODUTO</S.Title>
            </Grid>
            <Grid item xs={3}>
              <S.Title>QTD</S.Title>
            </Grid>
            <Grid item xs={2}>
              <S.Title>SUBTOTAL</S.Title>
            </Grid>
          </Grid>
          {newData.map((item) => {
            return (
              <Grid
                container
                style={{ display: "flex", alignItems: "center" }}
                key={item.title}
              >
                <Grid item xs={2}>
                  <Image src={item.image} width={89} height={114} alt={""} />
                </Grid>
                <Grid item xs={3}>
                  <S.BoxPrice>
                    <S.Text>{item.title}</S.Text>
                    <S.Price>{`R$ ${item.price
                      .toFixed(2)
                      .replace(".", ",")}`}</S.Price>
                  </S.BoxPrice>
                </Grid>
                <Grid item xs={3}>
                  <S.BoxInput>
                    <img
                      src={Less.src}
                      onClick={() => handleRemoveMovie(item)}
                      style={{ cursor: "pointer" }}
                      alt={""}
                    />
                    <S.InputNumber
                      value={amountsOfMovies(dataArray, item.id)}
                    />
                    <img
                      src={More.src}
                      onClick={() => handleAddMovie(item)}
                      style={{ cursor: "pointer" }}
                      alt={""}
                    />
                  </S.BoxInput>
                </Grid>
                <Grid item xs={2}>
                  <S.Price>{`R$ ${(
                    item.price * amountsOfMovies(dataArray, item.id)
                  )
                    .toFixed(2)
                    .replace(".", ",")}`}</S.Price>
                </Grid>
                <Grid
                  item
                  xs={2}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <img
                    src={Bin.src}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemoveAllMovies(item)}
                    alt={""}
                  />
                </Grid>
              </Grid>
            );
          })}
          <S.Divider />
          <S.BoxPurchase>
            <S.Purchase onClick={handlePurchase}>FINALIZAR PEDIDO</S.Purchase>
            <S.BoxTotal>
              <S.TotalText>TOTAL</S.TotalText>
              <S.TotalPrice>{`R$ ${Total.toFixed(2).replace(
                ".",
                ","
              )}`}</S.TotalPrice>
            </S.BoxTotal>
          </S.BoxPurchase>
        </S.Content>
      )}
    </S.Container>
  );
}
