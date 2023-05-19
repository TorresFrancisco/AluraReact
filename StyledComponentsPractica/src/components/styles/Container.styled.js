import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 40px 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  h1 {
    color: black;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.quaternaty};
  }
`;
