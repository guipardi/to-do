import { CompletedTasks, CreatedTasks, TasksInfoContainer } from "./styles"

export function TasksInfo() {
  return (
    <TasksInfoContainer>
      <CompletedTasks>
        <span>Tarefas Criadas</span>
        <span>0</span>
      </CompletedTasks>
      <CreatedTasks>
        <span>Tarefas Criadas</span>
        <span>0</span>
      </CreatedTasks>
    </TasksInfoContainer>
  )
}