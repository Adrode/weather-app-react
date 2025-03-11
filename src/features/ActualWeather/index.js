import { Place } from "./Place";
import { Temperature } from "./Temperature";
import { AdditionalInfo } from "./AdditionalInfo";
import { Section } from "../../common/Section/styled";

const ActualWeather = () => {

    return (
        <Section>
            <Place
                title={"City"}
            />
            <Temperature />
            <AdditionalInfo
                humidity={"20%"}
                cloudCover={"35%"}
                chanceOfRain={"50%"}
            />
        </Section>
    )
}

export default ActualWeather;