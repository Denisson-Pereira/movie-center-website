import styled from "styled-components";

export const Container = styled.div`
    padding: 0vw 5vw;
    background-color: ${(props) => props.theme.colors.bg2};
`;

export const ContainerLine = styled.div`
    background-color: ${(props) => props.theme.colors.text};
    height: 1px;
`;
