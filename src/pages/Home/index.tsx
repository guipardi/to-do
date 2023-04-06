import { AlertText, ClipboardImg, NoTasksContainer, WithTasks } from "./styles";
import clipboardImg from "../../assets/clipboard.svg"
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState([''])

  return (
    <>
      { tasks.length > 1 ? (
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