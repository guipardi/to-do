import { AlertText, ClipboardImg, NoTasksContainer, WithTasks } from "./styles";
import clipboardImg from "../../assets/clipboard.svg"
import { useContext, useState } from "react";
import { TasksContext } from "../../contexts/TasksContext";

export function Home() {
  const { tasks } = useContext(TasksContext)
  console.log(tasks)
  return (
    <>
      { tasks.length > 0 ? (
        <WithTasks>
          <h1>Tasks</h1>
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