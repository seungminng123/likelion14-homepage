import styled from "styled-components";
import Button from "../components/button/Button";

export default function TopSection({selectedGeneration, setSelectedGeneration}){

    return(
        <>
            <TextBox>
                <Text1>구성원</Text1>
                <Text2>서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.</Text2>
            </TextBox>
            <ButtonBox>
                <Button 
                    $active={selectedGeneration === 14}
                    onClick={() => setSelectedGeneration(14)}> 14기 </Button>
                <Button 
                    $active={selectedGeneration === 13}
                    onClick={() => setSelectedGeneration(13)}> 13기 </Button>
                <Button 
                    $active={selectedGeneration === 12}
                    onClick={() => setSelectedGeneration(12)}> 12기 </Button>
                <Button 
                    $active={selectedGeneration === 11}
                    onClick={() => setSelectedGeneration(11)}> 11기 </Button>
            </ButtonBox>
        </>
    )
}

const TextBox = styled.div`
    width : 1300px;
    height : 100px;
`; 
const Text1 = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 8px 18px;
    border: 3px solid #1a1a1a;
    margin-bottom :17px;

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
    margin-top: 59px;
`;