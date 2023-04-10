import { AlertText, ClipboardImg, NoTasksContainer, WithTasks } from "./styles";
import clipboardImg from "../../assets/clipboard.svg"
import { useContext, useState } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { TaskBar } from "./TaskBar";

export function Home() {
  const { tasks } = useContext(TasksContext)
  console.log(tasks)

  return (
    <>
      { tasks.length > 0 ? (
        <WithTasks>
          {tasks.map((task) => {
            return (
              <TaskBar 
                key={String(task.id)} 
                task={task}
              />
            )
          })}
        </WithTasks>      
      ) : (
        <NoTasksContainer>
          <ClipboardImg src={clipboardImg} alt="" />

          <AlertText>
            <strong>Você ainda não tem tarefas cadastradas.</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </AlertText>
        </NoTasksContainer>
      )}
    </>
  )
}