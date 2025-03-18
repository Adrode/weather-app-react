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

    -webkit-box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
`;