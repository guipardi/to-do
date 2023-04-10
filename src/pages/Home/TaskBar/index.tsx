import { Trash } from "phosphor-react";
import { useState } from "react";
import { TaskBarContainer } from "./styles";

interface TaskBarProps {
  task: string
}

export function TaskBar({ task }: TaskBarProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleChange() {
    setIsChecked(!isChecked)
  }

  return (
    <TaskBarContainer>
      <input type="checkbox" checked={isChecked} onChange={handleChange}/>
      <p style={{textDecoration: isChecked ? "line-through" : "none"}}>{task}</p>
      <button>
        <Trash />
      </button>
    </TaskBarContainer> 
  )
}