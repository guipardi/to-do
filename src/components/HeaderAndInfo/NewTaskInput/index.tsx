import { PlusCircle } from "phosphor-react";
import { NewTaskButtonContainer, NewTaskContainer, NewTaskInput } from "./styles";

export function NewTask() {
  return (
    <NewTaskContainer>
      <NewTaskInput />

      <NewTaskButtonContainer>
        Criar
        <PlusCircle />
      </NewTaskButtonContainer>

    </NewTaskContainer>
  )
}