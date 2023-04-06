import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;

  background-color: ${(props) => props.theme["gray-700"]};
`

export const HeaderContent =  styled.img`
  height: 3rem;
  width: 7.875rem;

  margin-bottom: 0.25rem;
`