import { PlusCircle } from "phosphor-react";
import { NewTaskButtonContainer, NewTaskContainer, NewTaskInput } from "./styles";
import { useContext } from "react";
import { TasksContext } from "../../../contexts/TasksContext";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

export function NewTask() {
  const { createNewTask } = useContext(TasksContext)

  const newTaskFormSchema = zod.object({
    description: zod.string().min(0)
  })

  type newTaskFormInputs = zod.infer<typeof newTaskFormSchema>

  const { handleSubmit, reset, register, formState: { isSubmitting } } = useForm<newTaskFormInputs>({
    resolver: zodResolver(newTaskFormSchema),
  })

  function handleCreateNewTask() {
    createNewTask()
  }

  return (
    <NewTaskContainer onSubmit={handleSubmit(handleCreateNewTask)}>
      <NewTaskInput {...register('description')}/>

      <NewTaskButtonContainer 
        type="submit" 
        disabled={isSubmitting}
      >
        Criar
        <PlusCircle />
      </NewTaskButtonContainer>

    </NewTaskContainer>
  )
}

