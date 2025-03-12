import {
    StyledHourlyWeather,
    Header,
    HourTemperatureContainer,
    HourTemperature,
    Hour,
    Temperature
} from "./styled";

export const HourlyWeather = () => {

    return (
        <StyledHourlyWeather>
            <Header>Hourly weahter</Header>
            <HourTemperatureContainer>
                <HourTemperature>
                    <Hour>12:00</Hour>
                    <Temperature>15°C</Temperature>
                </HourTemperature>
                <HourTemperature>
                    <Hour>13:00</Hour>
                    <Temperature>19°C</Temperature>
                </HourTemperature>
                <HourTemperature>
                    <Hour>14:00</Hour>
                    <Temperature>21°C</Temperature>
                </HourTemperature>
                <HourTemperature>
                    <Hour>15:00</Hour>
                    <Temperature>22°C</Temperature>
                </HourTemperature>
                <HourTemperature>
                    <Hour>16:00</Hour>
                    <Temperature>25°C</Temperature>
                </HourTemperature>
                <HourTemperature>
                    <Hour>17:00</Hour>
                    <Temperature>24°C</Temperature>
                </HourTemperature>
                <HourTemperature>
                    <Hour>18:00</Hour>
                    <Temperature>22°C</Temperature>
                </HourTemperature>
            </HourTemperatureContainer>
        </StyledHourlyWeather>
    )
}