import styled from "styled-components";

export const PlaceStyled = styled.h2`
    margin: 20px auto;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.big}px;

    text-shadow: 1px 1px 1px rgba(66, 68, 90, 1);
`;