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
            <AdditionalInfo />
        </ActualWeatherStyled>
    )
}

export default ActualWeather;