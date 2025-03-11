import styled from "styled-components";

export const StyledTemperature = styled.div`
    margin: 0 auto 60px;
    border: 10px double ${({ theme }) => theme.color.black};
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    width: 300px;

    background-color: ${({ theme }) => theme.color.backgroundItems};

    font-size: ${({ theme }) => theme.fontSize.large}px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledTemperatureValue = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: 170%;
`;