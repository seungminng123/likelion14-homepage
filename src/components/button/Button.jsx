import styled from "styled-components";

export default function Button({children}){
    return(
        <StyledButton> 
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    width: 92px;
    height : 44px;
    cursor : pointer; 
    justify-content : center;
    align-items: center;
    
    background-color: #F8FBE7;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 500;
`;