import styled from "styled-components";

export default function Button({children, onClick, $active}){
    return(
        <StyledButton onClick={onClick} $active={$active}> 
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
    
    background-color: ${({ $active }) => $active ? "#C6E400" : "white"};
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 500;
`;