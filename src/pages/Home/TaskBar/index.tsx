import { Trash } from "phosphor-react";
import { useState } from "react";
import { TaskBarContainer } from "./styles";

interface TaskBarProps {
  task: string
}

export function TaskBar({ task }: TaskBarProps) {
  return (
    <TaskBarContainer>
      <input type="checkbox" />
      <p>{task}</p>
      <button>
        <Trash />
      </button>
    </TaskBarContainer>
  )
}