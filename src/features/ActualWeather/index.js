import { ActualWeatherStyled } from "./styled";
import Place from "./Place";
import { Temperature } from "./Temperature";

const ActualWeather = () => {

    return (
        <ActualWeatherStyled>
            <Place
                title={"City"}
            />
            <Temperature />
        </ActualWeatherStyled>
    )
}

export default ActualWeather;