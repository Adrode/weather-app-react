import { InfoContainer, StyledAdditionalInfo } from "./styled"

export const AdditionalInfo = ({humidity, cloudCover, chanceOfRain}) => {

    return (
        <StyledAdditionalInfo>
            <InfoContainer>Humidity: {humidity}</InfoContainer>
            <InfoContainer>Cloud cover: {cloudCover}</InfoContainer>
            <InfoContainer>Chance of rain: {chanceOfRain}</InfoContainer>
        </StyledAdditionalInfo>
    )
}