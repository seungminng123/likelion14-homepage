import TopSection from "../components/TopSection";
import Button from "../components/button/Button"
import styled from "styled-components";
import InfoBox from "../components/InfoBox";
import members from "../data/members";


export default function Members() {
    const boss = members.filter((member)=> member.position === "대표" || member.position === "부대표");

    const managementPO = members.filter((member) => member.position === "운영진" || member.position ==="부대표"&& member.track ==="PO");
    const managementFE = members.filter((member) => member.position === "운영진" && member.track ==="FRONTEND");
    const managementBE = members.filter((member) => member.position === "운영진" && member.track ==="BACKEND");

    const babylionPO = members.filter((member)=> member.position === "아기사자" && member.track =="PO");
    const babylionFE = members.filter((member)=> member.position === "아기사자" && member.track =="FRONTEND");
    const babylionBE = members.filter((member)=> member.position === "아기사자" && member.track =="BACKEND");
    return (
        <Wrapper>
            <Container>
                <TopSection/>
            </Container>
            <PositionText>운영진</PositionText>
                <InfoContainer> 
                    {boss.map((member)=>
                        <card>
                            <TrackText>{member.position}</TrackText>               
                            <InfoBox
                                key={member.name}                   
                                member={member}/>
                        </card>    
                    )}
                </InfoContainer>

                <TrackText>PO</TrackText>
                    <InfoContainer>
                        {managementPO.map((member)=>
                        <InfoBox
                            key={member.name}
                            member={member}
                        />
                    )}
                    </InfoContainer>
                <TrackText>FRONTEND</TrackText>
                    <InfoContainer>
                        {managementFE.map((member)=>
                        <InfoBox
                            key={member.name}
                            member={member}
                        />
                    )}
                    </InfoContainer>
                <TrackText>BACKEND</TrackText>
                    <InfoContainer>
                        {managementBE.map((member)=>
                        <InfoBox
                            key={member.name}
                            member={member}
                        />
                    )}
                    </InfoContainer>

            <PositionText>아기사자</PositionText>
                <TrackText>PO</TrackText>
                    <InfoContainer>
                        {babylionPO.map((member)=>
                        <InfoBox
                            key={member.name}
                            member={member}
                        />
                    )}
                    </InfoContainer>
                <TrackText>FRONTEND</TrackText>
                    <InfoContainer>
                        {babylionFE.map((member)=>
                        <InfoBox
                            key={member.name}
                            member={member}
                        />
                    )}
                    </InfoContainer>
                <TrackText>BACKEND</TrackText>
                    <InfoContainer>
                        {babylionBE.map((member)=>
                        <InfoBox
                            key={member.name}
                            member={member}
                        />
                    )}
                    </InfoContainer>
        </Wrapper>
    );
}   

const Wrapper = styled.div`
    background-color: #FAFBF8;
    width : 100%;
    padding : 75px 58px ;

`;
const Container = styled.div`
    background-color: #FAFBF8;
    width : 1440px;

    word-wrap: break-word;
    padding-top: 85px;
    padding-bottom: 45px;
    border-bottom: 1px solid black;
`;
const InfoContainer = styled.div`
    display: flex;
    gap: 22px;
    flex-wrap: wrap; /*부모 width로 제한됨(줄바꿈 생기게함)*/
`;
const PositionText = styled.div`
    margin-top : 47px;
    margin-bottom: 47px;

    color: #1A1A1A;
    font-size: 30px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word;
`;
const TrackText = styled.div`
    color: #1A1A1A;
    font-size: 24px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word;  
    margin-bottom: 21px;
`;
const card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;