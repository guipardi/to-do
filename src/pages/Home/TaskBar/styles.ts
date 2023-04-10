import styled from "styled-components";

export const TaskBarContainer = styled.div`
  width: 46rem;

  display: grid;
  grid-template-columns: 1.5rem 1fr 1.5rem;
  gap: 1rem;

  background-color: ${(props) => props.theme["gray-500"]};
  border: 1px solid ${(props) => props.theme["gray-400"]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;

  p {
    display: flex;
    align-self: center;
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

  input[type="checkbox"] {
    -moz-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid ${(props) => props.theme.blue};
    outline: none;
    cursor: pointer;
    position: relative;
  }

  input[type="checkbox"]:checked {
    background-color: ${(props) => props.theme["purple"]};
    border-color: ${(props) => props.theme["purple"]};
  } 
`