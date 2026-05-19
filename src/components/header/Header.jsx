import LogoUrl from '../../assets/icons/logo.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <>
        <HeaderContainer>
            <Logo src={LogoUrl} onClick={() => navigate("/")} />
            <TitleStyle>멋쟁이사자처럼 서경대학교</TitleStyle>
            <Divider />
            
            <span></span>

            <Divider />

            <TextStyle>지원하기</TextStyle>
            <TextStyle>프로젝트</TextStyle>
            <TextStyle>구성원</TextStyle>
            
            <Divider />
            
            <TextStyle>로그인/회원가입</TextStyle>
        </HeaderContainer>
        <Divider2/> 
        </>
    );
}

const Logo = styled.img`
    width: 46px;
    height: 46px;
`;

const HeaderContainer = styled.header`
    padding-top: 16px;
    display: flex;
    justify-content: space-between; 
;`


const TitleStyle = styled.div`
    padding-top: 15px;
    color: #1A1A1A;
    font-size: 22px;
    font-family: Pretendard;
    font-weight: 700;

`;
const TextStyle = styled.div`
    padding-top: 15px;
    color: #1A1A1A;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word
`;
const Divider = styled.div`
    width: 1px;
    height: 68px;
    background-color: #1A1A1A;
`;
const Divider2 = styled.div`
    width: 1200px;
    height: 1px;
    background-color: #1A1A1A;
`;