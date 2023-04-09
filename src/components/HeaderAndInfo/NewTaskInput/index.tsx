import { PlusCircle } from "phosphor-react";
import { NewTaskButtonContainer, NewTaskContainer, NewTaskInput } from "./styles";
import { useContext } from "react";
import { TasksContext } from "../../../contexts/TasksContext";

export function NewTask() {
  const { createNewTask } = useContext(TasksContext)

  function handleCreateNewTask() {
    createNewTask()
  }

  return (
    <NewTaskContainer>
      <NewTaskInput />

      <NewTaskButtonContainer type="button" onClick={handleCreateNewTask}>
        Criar
        <PlusCircle />
      </NewTaskButtonContainer>

    </NewTaskContainer>
  )
}