import styled from "styled-components";

export const StyledHourlyWeather = styled.section`
    margin: 0 auto 40px;
    padding: 30px 20px;
    //max-width: 100%;
    //border: 1px solid red;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.backgroundItems};

    -webkit-box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
`;

export const Header = styled.h2`
    margin: 0 0 20px 0;
    align-self: flex-start;

    text-shadow: 1px 1px 1px rgba(66, 68, 90, 1);
`;

export const HourTemperatureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;

    overflow: none;
`;

export const HourTemperature = styled.div`
    border: 10px double ${({ theme }) => theme.color.backgroundItems};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.backgroundMain};
    padding: 20px 15px;

    display: grid;
    grid-template-rows: auto 50px;

    -webkit-box-shadow: 8px 8px 20px -10px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 20px -10px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 20px -10px rgba(66, 68, 90, 1);

    transition: transform 0.15s linear;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Hour = styled.span`
    border-bottom: 4px solid ${({ theme }) => theme.color.backgroundItems};
    border-radius: 4px;
    text-align: center;

    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Temperature = styled.span`
    align-content: end;
    text-align: center;

    font-size: 130%;
`;