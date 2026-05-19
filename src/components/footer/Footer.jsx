import styled from "styled-components";
import iconurl from '../../assets/icons/skon.png';

export default function Footer(){
    return (
        <Wrapper>
            <FooterContainer>
                <SkuText> SKULIKELION.</SkuText>
                <SkuText2> ALL RIGHTS RESERVED.</SkuText2>
                <SkuText3> Seokyeong University, 124 Seokyeong-ro, Seongbuk-gu, Seoul, 02726, Republic of Korea</SkuText3>
                <IconBox>
                    <Icon src={iconurl} />
                </IconBox>
            </FooterContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    border-top: 1px solid black;
`;

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    width: 1400px;
    height: 160px;
    margin: 0 auto;
`;
const Icon = styled.img`
    width: 60px;
    height: 60px;
`;
const IconBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;
const SkuText = styled.p`
    color: #00156A;
    font-size: 24px;
    font-family: New Font;
    font-weight: 400;
    word-wrap: break-word
`;
 const SkuText2 = styled.p`
    color: #3C3C3C;
    font-size: 14px;
    font-family: New Font;
    font-weight: 400;
    letter-spacing: 0.50px;
    word-wrap: break-word
`;
const SkuText3 = styled.p`
    color: #686868;
    font-size: 11px;
    font-family: New Font;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.50px;
    word-wrap: break-word;
`;


    