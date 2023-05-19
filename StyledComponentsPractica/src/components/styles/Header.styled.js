import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme })=> theme.colors.primary};
  padding: 40px 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  h1 {
    color: black;
  }
  &:hover {
    background-color: ${({ theme })=> theme.colors.secondary};
  }
`;
