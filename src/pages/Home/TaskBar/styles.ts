import styled from "styled-components";

export const TaskBarContainer = styled.div`
  width: 46rem;
  height: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme["gray-500"]};
  border: 1px solid ${(props) => props.theme["gray-400"]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 1rem;

  p {
    color: ${(props) => props.theme["gray-100"]};
    font-family: 'Inter' sans-serif;
    font-size: 0.875rem;
  }

  button {
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    border-radius: 4px;
    background-color: ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme["gray-100"]};
    font-size: 1.5rem;
    cursor: pointer;
  }
`