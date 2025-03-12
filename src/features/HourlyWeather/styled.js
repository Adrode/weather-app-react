import styled from "styled-components";

export const StyledHourlyWeather = styled.section`
    margin: 0 auto 40px;
    padding: 40px 20px;
    border: 1px solid red;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.backgroundItems};
`;

export const Header = styled.h2`
    margin: 0 0 20px 0;
    align-self: flex-start;
`;

export const HourTemperatureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px;
`;

export const HourTemperature = styled.div`
    border: 10px double ${({ theme }) => theme.color.backgroundItems};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.backgroundMain};
    padding: 20px 15px;

    display: grid;
    grid-template-rows: auto 50px;
`;

export const Hour = styled.span`
    border-bottom: 4px solid ${({ theme }) => theme.color.backgroundItems};
    border-radius: 4px;

    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Temperature = styled.span`
    align-content: end;
    text-align: center;
`;