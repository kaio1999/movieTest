"use client"

import * as S from './styled'
import BagCart from "../../../public/bag.svg";
import { useMediaQuery } from '@mui/material';
import { useMovie } from '@/Provider/MovieContext';
import { useRouter } from 'next/navigation';

export default function Header() {
    const { movies } = useMovie()

    const router = useRouter()

    const moviesArray = Object.values(movies);

    const isMobile = useMediaQuery('(max-width:758px)');

    const handleRedirect = () => {
        router.push('/carrinho') 
    }

    return (
        <S.Wrapper>
            <S.LogoText onClick={() => router.push('/')}>WeMovies</S.LogoText>
            <S.CartHeader onClick={handleRedirect}>
                <div>
                    {!isMobile && <S.TextCartHeader>Meu Carrinho</S.TextCartHeader>}
                    <S.ItemsCartHeader>
                        {`${moviesArray.length} ${moviesArray.length === 1 ? "item" : "itens"}`}
                    </S.ItemsCartHeader>
                </div>
                <img src={BagCart.src} width={31} height={26}/>
            </S.CartHeader>
        </S.Wrapper>
    )
}
