import styled from "styled-components";

export const TasksInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem auto 0 auto;
  width: 46rem;
`

const BaseTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;
`

export const CompletedTasks = styled(BaseTasks)`
  color: ${(props) => props.theme.blue};
`

export const CreatedTasks = styled(BaseTasks)`
  color: ${(props) => props.theme.purple};
`
