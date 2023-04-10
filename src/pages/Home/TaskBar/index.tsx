import { Trash } from "phosphor-react";
import { TaskBarContainer } from "./styles";

export function TaskBar({ task }: any) {
  return (
    <TaskBarContainer>
      <input type="checkbox"/>
      <p>{task}</p>
      <button>
        <Trash />
      </button>
    </TaskBarContainer>
  )
}