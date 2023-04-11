import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { TaskBarContainer } from "./styles";
import { TasksContext } from "../../../contexts/TasksContext";

interface TaskBarProps {
  task: {
    description: string,
    id: Date,
    completed: boolean
  }
}

export function TaskBar({ task }: TaskBarProps) {
  const [completed, setCompleted] = useState(false)
  const { deleteTask } = useContext(TasksContext)

  function handleChange() {
    setCompleted(!completed)

  }

  function handleDeleteTask(id: string) {
    deleteTask(id)
  }

  return (
    <TaskBarContainer>
      <input type="checkbox" checked={completed} onChange={handleChange}/>
      <p style={{textDecoration: completed ? "line-through" : "none"}}>{task.description}</p>
      <button type="button" onClick={() => handleDeleteTask(String(task.id))}>
        <Trash />
      </button>
    </TaskBarContainer> 
  )
}