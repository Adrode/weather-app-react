import { InfoContainer, StyledAdditionalInfo } from "./styled"

export const AdditionalInfo = () => {

    return (
        <StyledAdditionalInfo>
            <InfoContainer>Humidity: 50%</InfoContainer>
            <InfoContainer>Cloud cover: 20%</InfoContainer>
            <InfoContainer>Chance of rain: 25%</InfoContainer>
        </StyledAdditionalInfo>
    )
}