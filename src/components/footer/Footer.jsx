import styled from "styled-components";
import iconurl from '../../assets/icons/skon.png';
import imageurl from "../../assets/images/footer.png";

export default function Footer(){
    return (
        <Wrapper>
            <FooterContainer>
                <Image src ={imageurl}/>
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
const Image = styled.img`
    width: 635px;
;`



    