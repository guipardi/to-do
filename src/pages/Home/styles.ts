import styled from "styled-components";

export const NoTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1.5rem auto 0 auto;
  width: 46rem;
  border-top: 1px solid ${(props) => props.theme["gray-400"]};
`

export const ClipboardImg = styled.img`
  margin-top: 4rem;
`

export const AlertText = styled.p`
  font-family: 'Inter', sans-serif;

  margin-top: 1rem;
  color: ${(props) => props.theme["gray-300"]};

  line-height: 22.4px;
`

export const WithTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;
`