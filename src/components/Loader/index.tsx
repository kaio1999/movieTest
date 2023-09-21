"use client"

import * as S from './styled'
import load from "../../../public/load-spinner.png";

export default function Loader() {
    return (
        <S.Wrapper>
            <S.LoaderContainer>
                <img src={load.src}/>
            </S.LoaderContainer>
        </S.Wrapper>
    )
}
