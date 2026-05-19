import styled from "styled-components";
import Button from "../components/button/Button";

export default function TopSection(){
    return(
        <>
            <TextBox>
                <Text1>구성원</Text1>
                <Text2>서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.</Text2>
            </TextBox>
            <ButtonBox>
                <Button> 14기 </Button>
                <Button> 13기 </Button>
                <Button> 12기 </Button>
                <Button> 11기 </Button>
            </ButtonBox>
        </>
    )
}

const TextBox = styled.div`
    width : 1300px;
    height : 100px;
`; 
const Text1 = styled.div`
    color: #1A1A1A;
    font-size: 36px;
    font-family: Pretendard;
    font-weight: 700;
    word-wrap: break-word
`;
const Text2 = styled.div`
    color: #1A1A1A;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 500;
    word-wrap: break-word
`;
const ButtonBox = styled.div`
    display: flex;
    gap: 18px;
`;
 