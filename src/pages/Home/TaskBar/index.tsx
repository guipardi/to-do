import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { TaskBarContainer } from "./styles";
import { TasksContext } from "../../../contexts/TasksContext";

interface TaskBarProps {
  task: {
    description: string,
    id: Date
  }
}

export function TaskBar({ task }: TaskBarProps) {
  const [isChecked, setIsChecked] = useState(false)
  const { deleteTask } = useContext(TasksContext)

  function handleChange() {
    setIsChecked(!isChecked)
  }

  function handleDeleteTask(id: string) {
    deleteTask(id)
  }

  return (
    <TaskBarContainer>
      <input type="checkbox" checked={isChecked} onChange={handleChange}/>
      <p style={{textDecoration: isChecked ? "line-through" : "none"}}>{task.description}</p>
      <button type="button" onClick={() => handleDeleteTask(String(task.id))}>
        <Trash />
      </button>
    </TaskBarContainer> 
  )
}