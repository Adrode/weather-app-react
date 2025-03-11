import { Section } from "../../common/Section/styled"
import { Header, HourTemperatureContainer, HourTemperature } from "./styled"

export const HourlyWeather = () => {

    return (
        <Section>
            <Header>Hourly weahter</Header>
            <HourTemperatureContainer>
                <HourTemperature>
                    12:00
                </HourTemperature>
                <HourTemperature>
                    13:00
                </HourTemperature>
                <HourTemperature>
                    14:00
                </HourTemperature>
                <HourTemperature>
                    15:00
                </HourTemperature>
                <HourTemperature>
                    16:00
                </HourTemperature>
                <HourTemperature>
                    17:00
                </HourTemperature>
                <HourTemperature>
                    18:00
                </HourTemperature>
            </HourTemperatureContainer>
        </Section>
    )
}