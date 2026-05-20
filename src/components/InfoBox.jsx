import imageUrl from "../assets/images/image1.png"
import imageUrl2 from "../assets/images/image2.png"
import styled from "styled-components";

export default function InfoBox({member}){
    return(
    <Card>
        <ImageBox>
            <Image1 src={imageUrl}/>
            <Image2 src={imageUrl2}/>
        </ImageBox>
        <TextBox>
            <NameText>{member.name}</NameText>
            <Text>{member.major}</Text>
            <Text>{member.studentId}</Text>
        </TextBox>
    </Card>
    )
}
const Card = styled.div`
    width: 236px;
    display: flex;
    flex-direction: column;
    padding-bottom: 83px;
`;

const ImageBox = styled.div`
    width: 236px;
    height: 216px;
    display: flex;
    padding : 18px 24px;
    border: 2px solid black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Image1 = styled.img`
    width : 180px;
    height : 150px;
    position: relative;
`;
const Image2 = styled.img`
    width: 92px;
    height: 92px;
    position: absolute;
`;
const TextBox = styled.div`
    width: 236px;
    height: 92px;
    display: flex;
    border-right: 2px solid black;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    flex-direction: column;
    padding: 5px 15px;
    background-color: #F8FBE7;
`;
const NameText =styled.div`
    color: #1A1A1A;
    font-size: 22px;
    font-family: Pretendard;
    font-weight: 700;
    word-wrap: break-word
`;
const Text = styled.div`
    color: #1A1A1A;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    word-wrap: break-word
`;