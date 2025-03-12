import { Place } from "./Place";
import { Temperature } from "./Temperature";
import { AdditionalInfo } from "./AdditionalInfo";
import { StyledActualWeather } from "./styled";

export const ActualWeather = () => {

    return (
        <StyledActualWeather>
            <Place
                title={"City"}
            />
            <Temperature />
            <AdditionalInfo
                humidity={"20%"}
                cloudCover={"35%"}
                chanceOfRain={"50%"}
            />
        </StyledActualWeather>
    )
}