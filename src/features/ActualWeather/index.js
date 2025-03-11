import { ActualWeatherStyled } from "./styled";
import Place from "./Place";
import { Temperature } from "./Temperature";
import { AdditionalInfo } from "./AdditionalInfo";

const ActualWeather = () => {

    return (
        <ActualWeatherStyled>
            <Place
                title={"City"}
            />
            <Temperature />
            <AdditionalInfo
                humidity={"20%"}
                cloudCover={"35%"}
                chanceOfRain={"50%"}
            />
        </ActualWeatherStyled>
    )
}

export default ActualWeather;