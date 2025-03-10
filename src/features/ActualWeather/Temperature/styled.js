import styled from "styled-components";

export const StyledTemperature = styled.div`
    border: 10px double black;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    width: 300px;

    font-size: ${({ theme }) => theme.fontSize.large}px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledTemperatureValue = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: 170%;
`;