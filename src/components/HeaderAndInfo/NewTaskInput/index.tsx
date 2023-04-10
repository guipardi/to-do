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
    description: zod.string().min(1).max(30)
  })

  type newTaskFormInputs = zod.infer<typeof newTaskFormSchema>

  const { handleSubmit, reset, register, formState: { isSubmitting } } = useForm<newTaskFormInputs>({
    resolver: zodResolver(newTaskFormSchema),
  })

  function handleCreateNewTask(data: any) {
    createNewTask(data)
    reset()
  }

  return (
    <NewTaskContainer onSubmit={handleSubmit(handleCreateNewTask)}>
      <NewTaskInput 
        {...register('description')}
        required
      />

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

