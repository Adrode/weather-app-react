import styled from "styled-components";

export const Header = styled.h2`
    margin: 0 0 20px 0;
    align-self: flex-start;
`;

export const HourTemperatureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
`;

export const HourTemperature = styled.div`
    border: 8px double ${({ theme }) => theme.color.backgroundMain};
    border-radius: 20%;
    background-color: ${({ theme }) => theme.color.backgroundItems};
    padding: 40px 20px;

    display: flex;
`;