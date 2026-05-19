import TopSection from "../components/TopSection";
import Button from "../components/button/Button"
import styled from "styled-components";


export default function Members() {
    return (
        <Wrapper>
            <Container1>
                <TopSection/>
            </Container1>
        </Wrapper>
    );
}   

const Wrapper = styled.div`
    background-color: #F8FBE7;
    width : 100%;
    padding : 75px 58px ;

`;
const Container1 = styled.div`
    background-color: #F8FBE7;
    width : 1440px;

    word-wrap: break-word
    padding-top: 85px;
    padding-bottom: 45px;
    border-bottom: 1px solid black;
`;
