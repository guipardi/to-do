import styled from "styled-components";

export const NewTaskContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 46rem;

  margin-top: -1.6875rem;
  margin-left: auto;
  margin-right: auto;
`

export const NewTaskInput = styled.input`
  padding: 1rem;
  border-radius: 8px;
  width: 39.875rem;
  height: 3.375rem;

  background-color: ${(props) => props.theme["gray-500"]};
  border: 1px solid ${(props) => props.theme["gray-700"]};
` 

export const NewTaskButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.white};

  width: 5.625rem;
  height: 3.25rem;

  background-color: ${(props) => props.theme["blue-dark"]};
`