import styled from "styled-components";

export const StyledAdditionalInfo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const InfoContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.color.backgroundItems};
    border-radius: 5%;
    padding: 20px;

    background-color: ${({ theme }) => theme.color.backgroundItems};
`;