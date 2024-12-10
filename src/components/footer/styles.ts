import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.bg2};
    display: flex;
    justify-content: space-between;
    padding: 3vw 5vw;
`;

export const ContainerInfo = styled.div`

`;

export const Title = styled.div`
    font-size: 1.2vw;
    color: ${(props) => props.theme.colors.text1};
    margin-bottom: 1.5vw;
`;

export const Info = styled.p`
    color: ${(props) => props.theme.colors.text2};
`;

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.text2};
    gap: 1vw;
`;

export const Icon = styled.div`
    display: flex;
    color: ${(props) => props.theme.colors.text2};
    font-size: 2vw;
`;