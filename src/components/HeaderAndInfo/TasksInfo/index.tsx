import { CompletedTasks, CounterTasks, CreatedTasks, TasksInfoContainer } from "./styles"

export function TasksInfo() {
  return (
    <TasksInfoContainer>
      <CompletedTasks>
        <span>Tarefas Criadas</span>
        <CounterTasks>0</CounterTasks>
      </CompletedTasks>
      <CreatedTasks>
        <span>Tarefas Criadas</span>
        <CounterTasks>0</CounterTasks>
      </CreatedTasks>
    </TasksInfoContainer>
  )
}