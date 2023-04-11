import { useContext } from "react"
import { CompletedTasks, CounterTasks, CreatedTasks, TasksInfoContainer } from "./styles"
import { TasksContext } from "../../../contexts/TasksContext"

export function TasksInfo() {
  const { tasks } = useContext(TasksContext)

  const filteredTasks = tasks.filter((task) => {
    if (task.completed === true) {
      return task
    }
  })

  return (
    <TasksInfoContainer>
      <CompletedTasks>
        <span>Tarefas Criadas</span>
        <CounterTasks>{tasks.length}</CounterTasks>
      </CompletedTasks>
      <CreatedTasks>
        <span>Concluídas</span>
        <CounterTasks>
          {filteredTasks.length}
        </CounterTasks>
      </CreatedTasks>
    </TasksInfoContainer>
  )
}